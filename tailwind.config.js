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
    },
  },
  plugins: [],
};
