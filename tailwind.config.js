/* eslint-disable no-unused-vars,prettier/prettier */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Londrina Solid']
      },

      backgroundColor: theme => ({
        'green-main': '#30DBD5'
      }),

      borderColor: theme => ({
        'green-main': '#30DBD5'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
