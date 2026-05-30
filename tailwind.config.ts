import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fb',
          100: '#e0eef7',
          200: '#c1def0',
          300: '#a1cde8',
          400: '#5aabe0',
          500: '#0A4D68',
          600: '#094260',
          700: '#073850',
          800: '#062e40',
          900: '#042438',
        },
        secondary: {
          50: '#f0f7fa',
          100: '#dff0f5',
          200: '#bfe0eb',
          300: '#9fd1e1',
          400: '#40b3d7',
          500: '#088395',
          600: '#077587',
          700: '#065f72',
          800: '#054b5c',
          900: '#043747',
        },
        accent: {
          50: '#f0fbfe',
          100: '#e0f7fd',
          200: '#c1eefb',
          300: '#a1e5f9',
          400: '#40d9f7',
          500: '#05BFDB',
          600: '#04a8c3',
          700: '#0391ab',
          800: '#027a93',
          900: '#01637b',
        },
        success: '#00A86B',
        gold: '#D4AF37',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [],
} satisfies Config;
