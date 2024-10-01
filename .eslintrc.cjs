module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'linebreak-style': (process.platform === 'win32' ? 0 : ['error', 'unix']),
    'no-underscore-dangle': ['off'],
    'no-param-reassign': [2, { 'props': false }],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'alias': {
        'map': [['@', './src/']],
        'extensions': ['.ts', '.tsx', '.json']
      }
    }
  }
}
