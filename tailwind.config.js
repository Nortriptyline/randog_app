/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto'],
      'body': ['Roboto']
    },
    extend: {
      colors: {
        primary: colors.sky[700],
        secondary: colors.orange[400]
      }
    },
  },
  plugins: [],
}

