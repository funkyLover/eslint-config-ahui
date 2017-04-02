module.exports = {
  // for Vuejs
  root: true,
  extends: './index.js',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  plugins: [
    'html'
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0
  }
}
