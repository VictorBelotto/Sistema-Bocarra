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
        },
        card:{
          escuro:'#100f1e',
          claro:'#0c0c1b',
          contraste:'#1c1d1f'
        },
        text:{
          contraste:'#9f9eae'
        },
        fundo:{
          roxo:'#6a66ff',
          roxoH:'#5451cc',
          verde:'#79efbd',
          verdeH:'#5fbc94',
          bg:'#413a8e'
          
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

