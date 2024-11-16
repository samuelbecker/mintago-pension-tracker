import React from 'react';

interface FormProps {
  onSubmit: React.FormEventHandler;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => (
  <form
    className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
    onSubmit={onSubmit}
  >
    <div className="grid grid-cols-1 gap-6">
      <label className="block text-sm/6 font-medium text-gray-900">
        Income to receive in retriement:
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">£</span>
          </div>
          <input
            name="retirementIncome"
            type="number"
            placeholder="0.00"
            className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            required
            min={0}
          />
        </div>
      </label>
      <label className="block text-sm/6 font-medium text-gray-900">
        Employee monthly contributions:
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">£</span>
          </div>
          <input
            name="employeeContributions"
            type="number"
            placeholder="0.00"
            className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            required
            min={0}
          />
        </div>
      </label>
      <label className="block text-sm/6 font-medium text-gray-900">
        Employer monthly contributions:
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">£</span>
          </div>
          <input
            name="employerContributions"
            type="number"
            placeholder="0.00"
            className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            required
            min={0}
          />
        </div>
      </label>
      <label className="block text-sm/6 font-medium text-gray-900">
        Retirement age:
        <input
          name="retirementAge"
          type="number"
          placeholder="65"
          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          required
          min={25}
          max={81}
        />
      </label>
      <label className="block text-sm/6 font-medium text-gray-900">
        Annual interest rate:
        <select
          className="mt-1 block w-full rounded-md border-gray-300 py-1.5 pl-7 text-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm/6"
          name="interestRate"
        >
          <option value={4.9}>4.9%</option>
          <option value={0}>0%</option>
        </select>
      </label>
    </div>
    <div className="mt-6 flex items-center gap-x-6">
      <button
        className="rounded-md bg-orange px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
