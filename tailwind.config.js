/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '4xl': '60rem', // Adjust the value as needed
      },
    },
  },
  plugins: [],
}

