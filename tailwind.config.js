/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        
        '10000': '10000ms',
       }
    },
  },
  plugins: [],
}
