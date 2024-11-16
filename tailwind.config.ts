import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        lightBlue: 'var(--light-blue)',
        orange: 'var(--orange)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
