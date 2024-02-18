/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'base-2': '#1583FE',
        'base-5':'#CBE2F7',
      },
      backgroundColor: {
        'base-2': '#1583FE',
        'base-5':'#CBE2F7',
        'qiita': '#55C500',
      },
      borderColor: {
        'qiita': '#55C500',
      },
      screens: {
        'pc': '1000px',
        'iphone': '999px',
      },
      height:{
        'body': 'calc(100vh - 145px)',
      }
    },
  },
  plugins: [],
}

