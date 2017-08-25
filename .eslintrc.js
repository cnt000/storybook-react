module.exports = {
  // extends: [
  //   "eslint:recommended",
  //   "plugin:jest/recommended",
  //   "plugin:react/recommended",
  //   "prettier",
  // ], // extending recommended config and config derived from eslint-config-prettier
  extends: ['last', 'prettier/react', 'plugin:react/recommended'],
  plugins: ["prettier", "jest"], // activating esling-plugin-prettier (--fix stuff)
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": [
      // customizing prettier rules (unfortunately not many of them are customizable)
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],
    eqeqeq: ["error", "always"] // adding some custom ESLint rules
  },
  env: {
    jest: true
  },
};
