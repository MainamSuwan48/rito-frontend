/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [

      ////////////////////////////////////////////// *************ADJUST YOUR THEME HERE********************* //////////////////////////////////////////////
      {
        mytheme: {
          primary: '#FFCC70',

          secondary: '#4158D0',

          accent: '#ec4899',

          neutral: '#ffffff',

          'base-100': '#C850C0',

          info: '#fde047',

          success: '#84cc16',

          warning: '#f59e0b',

          error: '#dc2626',
        },
      },
    ],
  },
};
