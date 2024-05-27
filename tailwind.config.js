/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",

     // Path to Tremor module
     './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        "mainBackgroundColor": "#0D1117"
      }
    },
  },
  plugins: [],
}

