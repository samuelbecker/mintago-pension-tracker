import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface PensionData {
  age: number;
  pension: number;
}

/**
 * Merges Tailwind CSS classes with conditional class names.
 *
 * @param args - An array of class values to be merged.
 * @returns A single string of merged class names.
 */
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

/**
 * Formats a number as a currency string in GBP.
 *
 * @param value - The number to be formatted.
 * @returns The formatted currency string.
 */
export function formatCurrency(value: number): string {
  if (value === 0) {
    return '£0.00'; // Ensure 0 is formatted correctly
  }
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(value);
}

/**
 * Calculates the future value of regular contributions with compound interest.
 *
 * @param annualContribution - The annual contribution amount.
 * @param interestRate - The annual interest rate in percentage.
 * @param years - The number of years of contributions.
 * @returns The future value of the contributions.
 */
function calculateCompoundInterest(
  annualContribution: number,
  interestRate: number,
  years: number,
): number {
  const rate = interestRate / 100;
  if (rate === 0) {
    return annualContribution * years; // Simple multiplication if interest rate is 0
  }
  return annualContribution * (((1 + rate) ** years - 1) / rate);
}

/**
 * Calculates the total projected pension amount with regular annual contributions.
 *
 * @param employeeContribution - The monthly contribution from the employee.
 * @param employerContribution - The monthly contribution from the employer.
 * @param retirementAge - The age at which the person plans to retire.
 * @returns The total projected pension amount.
 */
export function calculateProjectedPension(
  employeeContribution: number,
  employerContribution: number,
  retirementAge: number,
  interestRate: number,
): number {
  const initialAge = 25; // The age at which contributions start

  // Calculate the total annual contribution
  const annualContribution = (employeeContribution + employerContribution) * 12;

  // Calculate the number of years of contributions
  const timeframe = retirementAge - initialAge;

  // Calculate the projected pension using compound interest
  const projectedPension = calculateCompoundInterest(
    annualContribution,
    interestRate,
    timeframe,
  );

  return projectedPension;
}

/**
 * Calculates the total desired pension needed for retirement.
 *
 * @param retirementIncome - The annual income desired during retirement.
 * @param retirementAge - The age at which the person plans to retire.
 * @returns The total desired pension.
 */
export function calculateDesiredPension(
  retirementIncome: number,
  retirementAge: number,
): number {
  const endAge = 81; // The age until which the pension is needed
  const yearsOfRetirement = endAge - retirementAge;
  const desiredPension = retirementIncome * yearsOfRetirement;
  return desiredPension;
}

/**
 * Calculates the pension data from the initial age to the end age.
 *
 * @param retirementIncome - The annual income desired during retirement.
 * @param employeeContribution - The monthly employee contribution.
 * @param employerContribution - The monthly contribution from the employer.
 * @param retirementAge - The age at which the person plans to retire.
 * @returns An array of PensionData objects representing the pension value at each age.
 */
export function calculatePensionData(
  retirementIncome: number,
  employeeContribution: number,
  employerContribution: number,
  retirementAge: number,
  interestRate: number,
): PensionData[] {
  const initialAge = 25;
  const endAge = 81;
  const annualContributions =
    (employeeContribution + employerContribution) * 12;
  const growthRate = (interestRate ?? 0) / 100;

  let pension = 0;
  const data: PensionData[] = [];

  // Accumulate pension from initial age to retirement age
  for (let age = initialAge; age < retirementAge; age++) {
    pension = accumulatePension(pension, annualContributions, growthRate);
    data.push(createPensionData(age, pension));
  }

  // Collect pension from retirement age to end age
  for (let age = retirementAge; age <= endAge; age++) {
    pension = collectPension(pension, retirementIncome);
    data.push(createPensionData(age, pension));
  }

  return data;
}

function accumulatePension(
  pension: number,
  contributions: number,
  interestRate: number,
): number {
  return (pension + contributions) * (1 + interestRate);
}

function collectPension(pension: number, retirementIncome: number): number {
  return pension - retirementIncome;
}

function createPensionData(age: number, pension: number): PensionData {
  return {
    age,
    pension,
  };
}
