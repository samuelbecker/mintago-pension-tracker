'use client';

import { useState } from 'react';
import { calculatePensionData } from './lib/utils';
import Chart from './ui/Chart';
import DescriptionList from './ui/DescriptionList';
import Form from './ui/Form';

interface FormDataTypes {
  employerContributions: number;
  employeeContributions: number;
  retirementAge: number;
  retirementIncome: number;
  interestRate: number;
}

export default function Home() {
  const [formData, setFormData] = useState<FormDataTypes>({
    retirementIncome: 0,
    employeeContributions: 0,
    employerContributions: 0,
    retirementAge: 0,
    interestRate: 0,
  });

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    setFormData({
      retirementIncome: Number(data.get('retirementIncome')),
      employeeContributions: Number(data.get('employeeContributions')),
      employerContributions: Number(data.get('employerContributions')),
      retirementAge: Number(data.get('retirementAge')),
      interestRate: Number(data.get('interestRate')),
    });
  }

  const pensionData = calculatePensionData(
    formData.retirementIncome,
    formData.employeeContributions,
    formData.employerContributions,
    formData.retirementAge,
    formData.interestRate,
  );

  return (
    <div className="bg-foreground min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-2xl font-bold text-white">
        Pension Tracker
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/4 xl:w-1/3">
          <Form onSubmit={handleFormSubmit} />
        </div>
        <div className="lg:w-3/4 xl:w-2/3">
          <Chart data={pensionData} />
          <DescriptionList data={formData} />
        </div>
      </div>
    </div>
  );
}
