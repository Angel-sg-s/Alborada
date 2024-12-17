/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'sans-serif'], // Reemplaza la fuente 'sans' predeterminada
      },
      boxShadow: {
        'text': '0 0 5px rgba(0, 0, 0, 0.7), 0 0 10px rgba(0, 0, 0, 0.7)', // Sombra para el texto
      },
      screens: {
        
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
    },
  },
  plugins: [],
}

