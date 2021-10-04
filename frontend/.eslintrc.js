module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    // 'prettier/prettier': ['warn'],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 0,
    'no-else-return': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
