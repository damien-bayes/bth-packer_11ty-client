module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "semi": [
      1, 
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "indent": [
      "error",
      2
    ],
    "quotes": [
      2, 
      "double", 
      { avoidEscape: true }
    ],
    "no-trailing-spaces": [
      2, 
      { skipBlankLines: true }
    ],
    "no-tabs": [
      "error", 
      { allowIndentationTabs: true }
    ]
  }
}
