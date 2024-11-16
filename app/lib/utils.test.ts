import {
  calculateDesiredPension,
  calculateProjectedPension,
  calculatePensionData,
} from './utils';

describe('utils', () => {
  describe('calculateProjectedPension', () => {
    it('should calculate the projected pension for given contributions and retirement age', () => {
      const employeeContribution = 200;
      const employerContribution = 100;
      const retirementAge = 65;
      const interestRate = 4.9;

      const result = calculateProjectedPension(
        employeeContribution,
        employerContribution,
        retirementAge,
        interestRate,
      );

      expect(result).toBe(424412.0654428324);
    });

    it('should return 0 if contributions are 0', () => {
      const employeeContribution = 0;
      const employerContribution = 0;
      const retirementAge = 65;
      const interestRate = 4.9;

      const result = calculateProjectedPension(
        employeeContribution,
        employerContribution,
        retirementAge,
        interestRate,
      );

      expect(result).toBe(0);
    });
  });

  describe('calculatePensionData', () => {
    it('should calculate pension data for given contributions and retirement age', () => {
      const retirementIncome = 20000;
      const employerContribution = 300;
      const employeeContribution = 200;
      const retirementAge = 65;
      const interestRate = 4.9;

      const result = calculatePensionData(
        retirementIncome,
        employeeContribution,
        employerContribution,
        retirementAge,
        interestRate,
      );

      // Check the first and last entries in the result array
      expect(result[0]).toEqual({ age: 25, pension: expect.any(Number) });
      expect(result[result.length - 1]).toEqual({
        age: 81,
        pension: expect.any(Number),
      });

      // Check that the result array has the correct length
      expect(result.length).toBe(81 - 25 + 1);
    });

    it('should handle zero contributions correctly', () => {
      const retirementIncome = 20000;
      const employeeContribution = 0;
      const employerContribution = 0;
      const retirementAge = 65;
      const interestRate = 4.9;

      const result = calculatePensionData(
        retirementIncome,
        employeeContribution,
        employerContribution,
        retirementAge,
        interestRate,
      );

      // Check that the pension value is zero before retirement age
      expect(result[retirementAge - 25 - 1].pension).toBe(0);

      // Check that the pension value decreases correctly after retirement age
      expect(result[retirementAge - 25].pension).toBe(-20000);
    });
  });

  describe('calculateDesiredPension', () => {
    it('should calculate the total desired pension for given retirement income and age', () => {
      const retirementIncome = 30000;
      const retirementAge = 65;

      const result = calculateDesiredPension(retirementIncome, retirementAge);

      // Expected result calculated manually or using a reliable source
      const expected = (81 - 65) * 30000; // 16 years of retirement income

      expect(result).toBe(expected); // Use toBeCloseTo for floating-point comparisons
    });

    it('should return 0 if retirement income is 0', () => {
      const retirementIncome = 0;
      const retirementAge = 65;

      const result = calculateDesiredPension(retirementIncome, retirementAge);

      expect(result).toBe(0);
    });
  });
});
