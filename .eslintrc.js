module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {
    "brace-style": [
      "error",
      "stroustrup",
    ],
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "no-mixed-operators": [
      "error",
      {
        "allowSamePrecedence": true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true,
      },
    ],
    "space-before-function-paren": [
      "error",
      "always",
    ],
  },
  globals: {},
}
