/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily: {
     'lobster': ['Lobster Two', 'sans-serif'] ,
     'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'gradient-start': '#07B3C6',
        'gradient-end': '#034f68'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

