/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes:[
      {
        darkModeWithGreen:{
          primary:'#02D07D',
          'primary-content':'#000000',
          secondary:'#494949',
          'secondary-content':'#FFFFFF',
          neutral:'#252525',
          'neutral-content':'#FFFFFF',
          'base-100':"#FFFFFF",
          'base-100-content':"#000000",
          'base-200':"#5F5F5F",
          'base-200-content':"#FFFFFF",
          'base-300':"#2E2E2E",
          'base-300-content':"#FFFFFF",
          warning:'#FBBE2E',
          error:'#F86158',
          success:'#2ACC41',
          info:'#00B5FF',
          accent:'#BF6700',
        }
        ,
        lightModeWithGreen: {
          primary: '#02D07D', // Mantemos a mesma cor primária
          'primary-content': '#FFFFFF', // Conteúdo em branco para contraste
          secondary: '#B0B0B0', // Um tom mais claro para a cor secundária
          'secondary-content': '#000000', // Texto em preto
          neutral: '#F5F5F5', // Um tom claro para neutros
          'neutral-content': '#000000', // Texto em preto
          'base-100': "#FFFFFF", // Fundo claro
          'base-100-content': "#000000", // Texto em preto
          'base-200': "#E0E0E0", // Um tom intermediário
          'base-200-content': "#000000", // Texto em preto
          'base-300': "#C8C8C8", // Um pouco mais escuro
          'base-300-content': "#000000", // Texto em preto
          warning: '#FBBE2E', // Mantemos o amarelo
          error: '#F86158', // Mantemos o vermelho
          success: '#2ACC41', // Mantemos o verde
          info: '#00B5FF', // Mantemos o azul
          accent: '#BF6700', // Mantemos a cor de destaque
        }
      }
    ]
  },
  plugins: [daisyui],

}

