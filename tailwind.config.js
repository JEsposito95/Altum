/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      xl2: '1.563rem',
      xl3: '1.953rem',
      xl4: '2.441rem',
      xl5: '3.052rem',
    
    fontFamily:{
      montserrat: ['montserrat']
    },
    extend: {
      colors:{
      naranja:'#F3783D',
      blanco: '#E7E5D9',
    },
  }
    },
    
  },
  plugins: [],
}
