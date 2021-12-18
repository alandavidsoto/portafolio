module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error'
  }
};
