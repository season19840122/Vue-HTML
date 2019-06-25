module.exports = {
  root: true,
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  parserOptions: {
    "ecmaVersion": 8,
    "sourceType": "module",
  },
  rules: {
    // "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "windows"],
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "no-console": "off",
    "no-undef": "off", // 关闭未定义
    "no-unused-vars": "off", // 关闭未使用变量
    "vue/require-v-for-key": "off" 
  }
}
