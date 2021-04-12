module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['bariolregular', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
    fontFamily: {
      'display': ['bariolregular', 'Helvetica', 'Arial', 'sans-serif'],
      'display2': ['bariolserif', 'Helvetica', 'Arial', 'sans-serif'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
