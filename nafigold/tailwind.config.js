/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Righteous", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
    },
    variants: {
      extend: {
        display: ['group-focus']
      },
    },
  },
  plugins: [],
}
