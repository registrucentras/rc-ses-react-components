import * as path from 'path'
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs'
import { URL, fileURLToPath } from 'node:url'
import typescript from 'rollup-plugin-typescript2'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

const scopedPackageName = pkg.name
const packageName = scopedPackageName.replace('/', '-').replace('@', '')

export default defineConfig({
  publicDir: false,
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/library/index.ts',
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: packageName,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/library/index.ts'),
      },
      external: [
        ...Object.keys(pkg.dependencies || {}),
        /^@mui($|\/.+)/,
        'react',
        'react-dom'
      ],
      output: {
        exports: 'named',
        preserveModules: false,
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    commonjs(),
    dts({
      insertTypesEntry: true,
      staticImport: true,
      tsconfigPath: './tsconfig.lib.json',
      exclude: ['src/setupTests.ts', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
    }),
    typescript({
      check: true,
      tsconfig: './tsconfig.lib.json',
      include: [
        './src/**/*.{ts|tsx|d.ts}',
      ],
    }),
    cssInjectedByJsPlugin({
      topExecutionPriority: false,
      relativeCSSInjection: true,
      // jsAssetsFilterFunction: (outputChunk) => outputChunk.name === 'main',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.mts', '.ts', '.tsx', '.vue'],
  },
})
