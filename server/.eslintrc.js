module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-template': 'off',
    'newline-per-chained-call': 'off',
  },
};
