/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/script-indent': 'off',
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/singleline-html-element-content-newline': [
      'warn', {
        'ignoreWhenNoAttributes': true,
        'ignoreWhenEmpty': true,
        'ignores': ['router-link', 'pre', 'span']
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'warn',
    'no-empty': 'warn',
    'semi': ['error', 'never'],
    'vue/attribute-hyphenation': 'off'
  }
}
