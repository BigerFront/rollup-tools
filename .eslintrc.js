// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
  },
  extends: [],
  plugins: [],
  rules: {
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-tabs': ['error', { allowIndentationTabs: true }],
    //
    'prettier/prettier': 'error',
  },
}
