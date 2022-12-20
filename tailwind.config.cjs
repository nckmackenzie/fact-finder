/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        technology: '#3b82f6',
        science: '#10b981',
        finance: '#f43f5e',
        society: '#eab308',
        entertainment: '#ec4899',
        health: '#14b8a6',
        history: '#f97316',
        news: '#8b5cf6',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to bottom right,#3b82f8,#10b981,#f43f5e,#eab308)',
      },
    },
    fontFamily: {
      main: ['Sono', 'sans-serif'],
      display: ['Coiny', 'cursive'],
    },
  },
  plugins: [],
};
