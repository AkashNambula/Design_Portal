/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F3EF',
        'dusty-rose': '#E8D5D0',
        'muted-rose': '#A66C70',
        wine: '#542D38',
        champagne: '#C7A879',
        charcoal: '#292326',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', '"Montserrat"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}

