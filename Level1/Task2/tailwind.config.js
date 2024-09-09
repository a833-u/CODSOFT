/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'violet':'#651FFF',
        'bg-violet':'#EDECFE',
        'light-violet': '#E5E5E5'
      },
      fontFamily:{
        'outfit':["Outfit", 'sans-serif']
      }
    },
  },
  plugins: [],
}

