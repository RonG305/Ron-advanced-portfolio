/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        lobster: 'Lobster, sans-serif',
        poppins: 'Poppins, sans-serif',
        Roboto: 'Roboto, sans-serif',
        Inter: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

