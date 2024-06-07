/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
        mainbgd: '#313338',
        navbgl: '#EEE',
        navbgd: '#1e1f22',
        textl: '#4d4f57',
        textd: '#EEE',
        themeTogglel: '#ffd900',
        themeToggleborderl: '#000',
        themeToggled: '#1e1f22',
        themeToggleborderd: '#ffd900',
        highlightl: '#5865f2',
        highlightd: '#ffd900',
    },
    extend: {},
  },
  plugins: [],
}

