module.exports = {
  parser: "babel-eslint",
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "dot-notation": "off", // Object 不強制用 "."
    "no-console": "off", // can console.log
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        semi: true, // 使用分號,
        singleQuote: false, // 使用雙引號
        trailingComma: "none", // 結尾逗號
        printWidth: 120
      }
    ]
  },
};
