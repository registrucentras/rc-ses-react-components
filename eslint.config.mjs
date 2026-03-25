import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const commonFiles = ['**/*.{js,mjs,cjs,jsx,ts,tsx}']
const tsFiles = ['**/*.{ts,tsx}']

export default [
  {
    ignores: [
      '**/coverage/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/storybook-static/**',
      '**/.storybook/**',
      '**/vite.config.ts',
      '**/vite.config.lib.ts',
      '**/vitest.config.ts',
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
    files: commonFiles,
  },
  {
    ...importPlugin.flatConfigs.typescript,
    files: tsFiles,
  },
  {
    ...reactPlugin.configs.flat.recommended,
    files: commonFiles,
  },
  {
    ...reactPlugin.configs.flat['jsx-runtime'],
    files: commonFiles,
  },
  {
    ...jsxA11y.flatConfigs.recommended,
    files: commonFiles,
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['eslint.config.mjs'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: commonFiles,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'prettier/prettier': 'error',
      'linebreak-style': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/display-name': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.stories.*',
            '**/*.test.*',
            '**/.storybook/**/*.*',
            'eslint.config.mjs',
            'src/setupTests.ts',
            'vite.config.ts',
            'vite.config.lib.ts',
            'vitest.config.ts',
          ],
          peerDependencies: true,
        },
      ],
      // Keep legacy react-hooks behavior from previous stack.
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/static-components': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [['@', './src/']],
          extensions: ['.ts', '.tsx', '.json'],
        },
        typescript: true,
      },
    },
  },
  prettierConfig,
]
