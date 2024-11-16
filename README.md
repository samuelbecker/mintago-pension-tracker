# Pension Tracker

A Next.js application for tracking pension contributions and projections.


## Prerequisites

- Node.js version 18 or above

## Getting Started

First, install the project's dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
1. Fill out the form with your pension details.
2. View the projected pension data on the chart.
3. Review the detailed pension information in the description list.

## Running Tests

To run the test suite:

```bash
npm run test
```

## Design Decisions

I opted to use the third-party library [Recharts](https://recharts.org/en-US/) for data visualizations, as it is simple to use with React and can be themed using component props and custom components.

I incorporated a form element to select whether to take into account interest or not.

I chose to display the information in a table-like layout, as it is easier to consume compared to including more information in the chart.

## Next Steps

If I had more time, I would have looked into the following:

- Including the ability to add pension pots, with considerations on whether interest should be included in those amounts. I wasn't able to include this feature, but I have further questions about how this should be shown. Should each pension pot be displayed separately, or should they be aggregated into a single value?, etc.
- Adding comprehensive test coverage for the Form component, including edge cases such as negative values, incorrect age ranges, and invalid inputs. This would ensure the robustness and reliability of the form. Additionally, improving the form experience by providing real-time validation feedback, user-friendly error messages, and ensuring accessibility for all users.
- Improved visualisation of negative values so users can better plan for when their pension could run out.
- Overall responsive design improvements.
