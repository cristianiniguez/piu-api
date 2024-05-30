module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:sonarjs/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'sort-destructure-keys', 'sonarjs'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}
