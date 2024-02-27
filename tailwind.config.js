/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#C850C0",
        
"secondary": "#FFCC70",
        
"accent": "#ec4899",
        
"neutral": "#ffffff",
        
"base-100": "#4158D0",
        
"info": "#fde047",
        
"success": "#84cc16",
        
"warning": "#f59e0b",
        
"error": "#dc2626",
        },
      },
    ],
  },
};
