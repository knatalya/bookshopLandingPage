/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'books': "url('/assets/books.png')",
        'polygon': "url('/assets/polygon.svg')",
      }

    },
  },
  plugins: [],
}
