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
          'base-300':"#FFE8E8",
          'base-300-content':"#FFFFFF",
          warning:'#FBBE2E',
          error:'#F86158',
          success:'#2ACC41',
          info:'#00B5FF',
          accent:'#BF6700',
        }
      }
    ]
  },
  plugins: [daisyui],

}

