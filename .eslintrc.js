module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    "rules": {
      "react/prop-types": ["error", { "ignore": ["navigation"] }]
 }
  }
};
