/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        dark: '#333',
        blue: '#2F80ED',
        gray: {
          300: '#828282',
          400: '#BDBDBD'
        }
      }
    },
  },
  plugins: [],
}

