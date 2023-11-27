/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'base-5':'#CBE2F7'
      },
      screens: {
        'iphone': '375px',
      },
    },
  },
  plugins: [],
}

