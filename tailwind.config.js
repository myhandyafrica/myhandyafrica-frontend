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
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}