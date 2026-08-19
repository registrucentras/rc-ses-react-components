import js from '@eslint/js'
import { configs, plugins } from 'eslint-config-airbnb-extended'
import prettierConfig from 'eslint-config-prettier'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import prettierPlugin from 'eslint-plugin-prettier'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

/**
 * Flat config, replacing the legacy .eslintrc.cjs (SAV-5648 / LIB-05).
 *
 * The chain below mirrors the previous `extends` order:
 *   eslint:recommended -> import -> react -> react/jsx-runtime ->
 *   react-hooks -> airbnb -> airbnb-typescript -> storybook -> prettier
 * prettier stays last so it can switch off stylistic rules the others enable.
 *
 * `airbnb` + `airbnb-typescript` are replaced by eslint-config-airbnb-extended:
 * the upstream packages peer-depend on ESLint <=8 and are unmaintained, so they
 * block the ESLint 9 upgrade outright.
 *
 * Note: airbnb-extended uses eslint-plugin-import-x rather than
 * eslint-plugin-import, so import rules are namespaced `import-x/*`.
 */

/**
 * Paths allowed to import from devDependencies. Everything here is either
 * tooling or part of the demo app, none of which is reachable from the library
 * entry point (src/library/index.ts).
 */
const devOnlyPaths = [
  '**/*.stories.*',
  '**/*.test.*',
  '**/.storybook/**/*.*',
  'vitest.config.ts',
  'src/setupTests.ts',
  // Demo app - shipped as source via files[] but never imported by the library
  'src/App.tsx',
  'src/main.tsx',
  'src/examples/**',
  'eslint.config.js',
  'playwright.config.ts',
  'visual/**',
]

/**
 * Rules that eslint-config-airbnb-extended enables but the previous
 * airbnb + airbnb-typescript pair did not. Switching them on here would mean
 * ~75 source edits with no functional change, which is outside LIB-05's scope
 * ("ESLint 9 on flat config at equivalent enforcement"). Tightening the ruleset
 * is a separate, deliberate decision - see docs/SAV-5648-backlog.md (LIB-05).
 */
const deferredStricterRules = {
  '@typescript-eslint/consistent-type-definitions': 'off', // 53 occurrences
  '@typescript-eslint/no-unnecessary-type-assertion': 'off', // 13
  '@typescript-eslint/array-type': 'off', // 7
  '@typescript-eslint/no-unnecessary-type-arguments': 'off', // 2
  '@typescript-eslint/no-empty-object-type': 'off', // 1
  // 24 occurrences, all of them the deliberate `RcSes*` public-name convention:
  // e.g. ServiceHeader.tsx default-exports `ServiceHeader`, imported as
  // `RcSesServiceHeader`. The rule has no way to know that is intentional.
  'import-x/no-rename-default': 'off',
}

export default [
  {
    // Ported from the legacy .eslintignore and .eslintrc.cjs ignorePatterns.
    // node_modules and dotfiles are ignored by ESLint 9 by default.
    ignores: [
      'dist/**',
      'public/**',
      'coverage/**',
      'storybook-static/**',
      'test-results/**',
      'vite.config.ts',
      'vite.config.lib.ts',
      'vitest.config.ts',
      'jest.config.cjs',
      'scripts/check-dist.ts',
    ],
  },
  js.configs.recommended,
  // Flat config requires plugins to be registered before any config references
  // their rules, so airbnb-extended exposes them separately from its configs.
  plugins.stylistic,
  plugins.importX,
  plugins.node,
  plugins.react,
  plugins.reactA11y,
  plugins.reactHooks,
  plugins.typescriptEslint,
  ...configs.base.recommended,
  ...configs.react.recommended,
  ...configs.base.typescript,
  ...configs.react.typescript,
  ...storybook.configs['flat/recommended'],
  prettierConfig,
  {
    name: 'rc-ses/overrides',
    plugins: { prettier: prettierPlugin },
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2021 },
    },
    settings: {
      react: { version: 'detect' },
      // airbnb-extended registers the TypeScript resolver with default options,
      // which leaves every `@/*` import unresolved (~1000 no-unresolved +
      // extensions errors). Overriding resolver-next wins over airbnb's entry.
      //
      // The alias is passed explicitly because the resolver does not pick up
      // `paths` from tsconfig.json here, even with baseUrl set and
      // moduleResolution "Bundler" - most likely because of the project
      // `references` entry. Retested and still needed as of Storybook 10.
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: './tsconfig.json',
          alwaysTryTypes: true,
          alias: { '@': [fileURLToPath(new URL('./src', import.meta.url))] },
        }),
      ],
    },
    rules: {
      ...deferredStricterRules,
      'prettier/prettier': 'error',
      // The library relies on `import type {} from '...'` to pull in MUI and
      // emotion module augmentations (src/library/index.ts, src/main.tsx).
      // Those blocks are deliberately empty and must not be removed.
      'import-x/no-empty-named-blocks': 'off',
      // eslint-plugin-react-hooks v7 (was v4) adds rules that flag real but
      // pre-existing patterns. Surfaced as warnings so the ESLint 9 migration
      // stays green; triage is a follow-up, not part of LIB-05.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/incompatible-library': 'warn',
      'react-hooks/static-components': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'linebreak-style': 'off',
      'no-underscore-dangle': 'off',
      'no-param-reassign': ['error', { props: false }],
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: devOnlyPaths,
          peerDependencies: true,
        },
      ],
    },
  },
  {
    // tsconfig.json has include: ["src"], so these files are outside the TS
    // project and typescript-eslint's project service cannot type them.
    // Parsing them without type information is enough for the rules we run.
    name: 'rc-ses/non-project-files',
    files: [
      '.storybook/**/*.ts',
      '.storybook/**/*.tsx',
      'visual/**/*.ts',
      'playwright.config.ts',
      '*.js',
      '*.cjs',
      '*.mjs',
    ],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: null,
      },
    },
    // Without type information the type-aware rules airbnb-extended enables
    // (e.g. @typescript-eslint/dot-notation) throw rather than fail, so they
    // have to be switched off for these files specifically.
    rules: tseslint.configs.disableTypeChecked.rules,
  },
]
