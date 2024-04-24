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
        },
        branco:{
          contraste:'#f8f8f8'
        }
      },

      boxShadow:{
        'button': '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
        'card': '0px 4px 5px 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

