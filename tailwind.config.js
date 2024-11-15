/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.html,js",
    "./components/**/*.html.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252B31",
        secondary: "#DFD7CA",
        tertiary: "#b89670",
        accent: "#DD7A1D"
      },
    },
  },
  plugins: [],
};
