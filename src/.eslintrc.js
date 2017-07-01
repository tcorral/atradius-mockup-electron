module.exports = {
  root: true,
  extends: 'eslint-config-airbnb-base',
  env: {
    browser: true
  },
  globals: {
    angular: true
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'func-names': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [0, { devDependencies: true, optionalDependencies: false }],
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'space-before-function-paren': [2, 'never'],
    'vars-on-top': 0
  }
};
