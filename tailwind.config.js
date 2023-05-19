/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myColor1: {
          100: '#ff8207',
          200: '#f06a06',
          300: '#c75007',
          400: '#9e3e0e',
          500: '#7f360f'
        },
        myColor2: {
          100: '#58494c',
          200: '#483d40',
          300: '#3c3335',
          400: '#342d2f',
          500: '#231d1e'
        },
        myColor3: {
          100: '#fcfcfc',
          200: '#efefef',
          300: '#dcdcdc',
          400: '#bdbdbd',
          500: '#989898'
        }
      }
    },
  },
  plugins: [],
}

