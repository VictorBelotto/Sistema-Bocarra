import { hydrate } from 'react-dom';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        redBocarra: {
          d:'#d03438',
          h:'#9d272a'
        }
      },
    },
  },
  plugins: [],
}

