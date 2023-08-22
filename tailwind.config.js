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
        'background1': "url('water.gif')",
        'background2': "url('Lilly.gif')",
        'background3': "url('spin.gif')"
      }
    },
  },
  plugins: [],
}

