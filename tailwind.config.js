/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'p-color': "#ff8207",
        's-color': "#d53d0c",
        't-color': "#880606",
        'c-color': "#231d1e",
        'q-color': "#fcfcfc",
      }
    },
  },
  plugins: [],
}

