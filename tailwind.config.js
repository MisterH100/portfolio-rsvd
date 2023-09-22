/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'default':['Montserrat','Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
      },
      backgroundImage:  {
        'home': "url('./assets/homebg.png')",
        'about': "url('./assets/aboutbg.png')",
        'skills': "url('./assets/skillsbg.png')",
        'contact': "url('./assets/contactbg.png')"
      }
    },
  },
  plugins: [],
}

