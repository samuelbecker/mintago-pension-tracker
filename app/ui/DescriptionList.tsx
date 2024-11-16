import React from 'react';
import {
  formatCurrency,
  calculateDesiredPension,
  calculateProjectedPension,
} from '@/app/lib/utils';

interface DescriptionListProps {
  data: {
    retirementIncome: number;
    employeeContributions: number;
    employerContributions: number;
    retirementAge: number;
    interestRate: number;
  };
}

const DescriptionList: React.FC<DescriptionListProps> = ({ data }) => {
  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-white">
            Desired amount to save by retirement:
          </dt>
          <dd className="mt-1 text-sm/6 text-white sm:col-span-1 sm:mt-0 sm:text-center">
            <strong>
              {formatCurrency(
                calculateDesiredPension(
                  data.retirementIncome,
                  data.retirementAge,
                ),
              )}
            </strong>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-white">
            Projected amount saved by retirement:
          </dt>
          <dd className="mt-1 text-sm/6 text-white sm:col-span-1 sm:mt-0 sm:text-center">
            <strong>
              {formatCurrency(
                calculateProjectedPension(
                  data.employeeContributions,
                  data.employerContributions,
                  data.retirementAge,
                  data.interestRate,
                ),
              )}
            </strong>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-white">
            Income to receive yearly in retirement:
          </dt>
          <dd className="mt-1 text-sm/6 text-white sm:col-span-1 sm:mt-0 sm:text-center">
            <strong>{formatCurrency(data.retirementIncome)}</strong>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-white">
            Employee contributions per year:
          </dt>
          <dd className="mt-1 text-sm/6 text-white sm:col-span-1 sm:mt-0 sm:text-center">
            <strong>{formatCurrency(data.employeeContributions * 12)}</strong>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default DescriptionList;
