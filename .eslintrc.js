module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-return-await': 'error',
    'eol-last': ["error", "always"],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-extra-parens': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'object-curly-newline': ["error", { "multiline": true }]
  },
};
