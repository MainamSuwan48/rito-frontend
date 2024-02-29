/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    colors: {
      primary_mute: '#853C43',
      secondary_mute: '#01787F',
      base_dark: '#222831',
      base_light: '#C7C8CC',
      danger: '#E6172B',
      success: '#C7EF00',
      neutral: '#EEEEEE',
    },

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ff6e7c',

          secondary: '#00ADB5',

          accent: '#ec4899',

          neutral: '#EEEEEE',

          'base-100': '#393e46',

          info: '#fde047',

          success: '#C7EF00',

          warning: '#ffce1c',

          error: '#E6172B',
        },
      },
    ],
  },
};
