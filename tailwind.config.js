/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todas las rutas de los archivos donde Tailwind buscará clases
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero_bg.png')", // Agrega tu imagen de fondo aquí
      },
    },
  },
  plugins: [],
}

