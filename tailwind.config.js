module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,vue,mdx}',
    './experience/**/*.mdx',
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
