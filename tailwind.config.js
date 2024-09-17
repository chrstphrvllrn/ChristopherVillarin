/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       text:{
          light: '#595F7A',
          brand: '#4F8989',
          dark:'#2E2F2F',
          darkblue:'#1A203C',
        },
        background: {
          DEFAULT: '#fff',
          light: '#f5f5f5',
          dark:'#2E2F2F',
          darkblue:'#1A203C',
        },
        button:{
          light: '#f3f3f3',
          brand: '#4F8989',
          dark: '#2E2F2F', 
          darkblue:'#1A203C', 
        },
        stroke:{
          strong: '#8086A6',
          weak:'#E5E7F0'
        },
        nav:{
          hover:'#F5F6FA'
        }
      }
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
      '4xl': '1950px',
    }
  },
  plugins: [],
}