/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#191624',
      },
      fontFamily: {
        "sa": ["sa", "s"],
      },
    },
  },
  plugins: [],
}
