/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1100px',
      },
      colors: {
        'primary': '#FFD2A4'
      
      },
      screens: {
        'xs': '400px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
          
      },
      fontFamily: {
      
      },
      backgroundImage: {
        'banner': "url('./images/banner.jpg')",
        overlay: ' linear-gradient(92deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
        visitbg:"url('./images/serv1.jpg')"
        
        
      }
    },
  },
  plugins: [],
}

