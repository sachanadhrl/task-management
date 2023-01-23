/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans', 'sans-serif']
      },
      screens: {
        'lg': '992px'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
