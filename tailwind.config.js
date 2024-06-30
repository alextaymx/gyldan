/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        primary: '#101010',
        secondary: '#454545',
        ternary: '#999696',
        border: '#c1c1c1',
        gray: '#181818',
        hrcOlor: '#d9d9d9',
        cr_banner: '#f4f4f4',
        accent: '#0064FC', // Use the primary accent color
        gray_sc: '#565656',
        body: 'var(--body-color)',
        heading: 'var(--heading-color)',
        primary: 'var(--primary-color)',
        cr_banner: 'var(--cr_banner-color)',
        border: 'var(--border-color)',
        common_white: 'var(--common-color-white)',
        common_black: 'var(--common-color-black)',
        drak: 'var(--drak-color)',
      },
      fontFamily: {
        body: ['Kanit', 'sans-serif'],
        heading: ['Inter Tight', 'sans-serif'],
      },
    },
  },
};
