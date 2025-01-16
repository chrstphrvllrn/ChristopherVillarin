/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/images/background/bg-patterns.png')",
      },
      colors:{
       text:{
          light: '#595F7A',
          lightgrey: '#5F5F5F',
          lightlightorange: '#E0E0E0',
          lightlightgrey: '#F8F7F5',
          brand: '#4F8989',
          dark:'#2E2F2F',
          darkgrey: '#595F7A',
          darkblue:'#1A203C',
          lightlightlight: '#F5F6FA',
          lightlight:'#E5E7F0'
        },
        background: {
          DEFAULT: '#fff',
          light: '#f5f5f5',
          lightlightorange: '#E0E0E0',
          lightlightgrey: '#F8F7F5',
          lightgrey: '#5F5F5F',
          dark:'#2E2F2F',
          darkblue:'#1A203C',
          brand: '#4F8989',
        },
        button:{
          light: '#f3f3f3',
          brand: '#4F8989',
          dark: '#2E2F2F', 
          darkgrey: '#595F7A',
          lightgrey: '#5F5F5F',
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
    listStyleImage: {
      checkmark: 'url("/public/icons/checkmark.png")',
      bullet: '',
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