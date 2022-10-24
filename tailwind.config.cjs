/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'Konnect': ['Konnect', 'sans-serif']
    },
    extend: {
      colors: {
        brand: {
          'cold': {
            DEFAULT: '#01E898',
            '50': '#A2FFDF',
            '100': '#8EFFD7',
            '200': '#65FEC9',
            '300': '#3CFEBB',
            '400': '#14FEAD',
            '500': '#01E898',
            '600': '#01B073',
            '700': '#01784F',
            '800': '#00402A',
            '900': '#000906'
          },
          'warm': {
            DEFAULT: '#F80064',
            '50': '#FFB1D0',
            '100': '#FF9CC4',
            '200': '#FF73AC',
            '300': '#FF4B93',
            '400': '#FF227B',
            '500': '#F80064',
            '600': '#C0004D',
            '700': '#880037',
            '800': '#500020',
            '900': '#18000A'
          },
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
