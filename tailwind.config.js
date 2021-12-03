module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'display': 'Oswald',
      'condensed':'Open Sans Condensed',
      'shippori':'Shippori Antique',
      'abril':'Abril Fatface',
      'zilla':'Zilla Slab',
      'satisfy':'Satisfy',
      'dm':'DM Serif Display',
      'playfair':'Playfair Display',
      'garamond':'EB Garamond',
      'acme':'Acme',
    },
    boxShadow:{
      'topLeft':' -0px -10px 5px 0px rgba(0,0,0,0.75)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
