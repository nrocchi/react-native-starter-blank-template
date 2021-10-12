module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "react-native", 'prettier'],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      { usePrettierrc: true },
    ],
    "react/prop-types": "off",
    "require-yield": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
    "react-native/react-native": true,
  },
};
