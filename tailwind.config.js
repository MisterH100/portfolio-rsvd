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
        primary: "#171414",
        primaryLight: "#4D4242",
        secondary: "#D1C7C7",
        primaryDark: "#1C1818"
      },
      backgroundImage:  {
        'background4': "url('./assets/background.png')",
        'background5': "url('./assets/grid.GIF')"
      }
    },
  },
  plugins: [],
}

