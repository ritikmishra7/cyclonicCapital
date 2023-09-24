/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'navborder1': '#e2e8f0', // Change this to your desired custom color
        'navborder2': '#c2d2ff26', // Change this to your desired custom color
      },
    },
  },
  plugins: [],
}