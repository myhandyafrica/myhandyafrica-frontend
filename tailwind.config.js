/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#39A0ED;',
          900: '#131725;',
        },
        secondary: '#F6F6F6;',
        lightBlue: '#CFFCFF;',
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu': {
          '0%': { transfrom: 'scaleY(0)'},
          '80%': { transfrom: 'scaleY(1.2)'},
          '100%': { transfrom: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}