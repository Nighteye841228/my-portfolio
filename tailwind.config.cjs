/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Spectral", "GenYoMin TW R"],
        game: ["Zpix"],
      },
    },
  },
  plugins: [],
};
