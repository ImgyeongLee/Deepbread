/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepbread: {
          white: 'rgb(var(--deepbread-white))',
          green: 'rgb(var(--deepbread-green))',
          lightgreen: 'rgb(var(--deepbread-lightgreen))',
          superlightgreen: 'rgb(var(--deepbread-superlightgreen))',
          brown: 'rgb(var(--deepbread-brown))',
          teagreen: 'rgb(var(--deepbread-teagreen))',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      minHeight: {
        '1/4': '25%',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        disappear: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
      },
      animation: {
        appear: 'appear 0.5s ease-in-out',
        disappear: 'appear 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
