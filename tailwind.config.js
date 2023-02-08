/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/static/index.html",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['monospace', 'Fira Code'],
    }
  },
  plugins: [
    'gatsby-plugin-postcss'
  ],

}
