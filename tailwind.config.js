/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px' },
      'lg': {'max': '991px' },
      'md': {'max': '767px' },
      'sm': {'max': '550px' },
      'xsm': {'max': '425px' },

    }
  },
  plugins: [],
}