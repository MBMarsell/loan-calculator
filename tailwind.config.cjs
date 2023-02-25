/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
