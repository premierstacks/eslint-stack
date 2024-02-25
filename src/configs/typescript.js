/**
 * This file is part of a software developed by Tomáš Chochola.
 *
 * Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * For the full copyright and license information, please view the
 * LICENSE.md file that was distributed with this source code, available
 * at the root of this repository.
 *
 * GitHub Profile: https://github.com/tomchochola
 * Support & Sponsor: https://github.com/sponsors/tomchochola
 */

import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['.phpunit.cache', '.phpunit.coverage', 'vendor', '**/.DS_Store', '**/.idea', '**/.vscode', '**/.fleet', 'dist', 'build', 'storage'],
  },
  {
    files: ['**/*.cjs'],
    ignores: ['*.config.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 2015,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'commonjs',
        ecmaVersion: 2015,
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    ignores: ['*.config.js', '*.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2015,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015,
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2015,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015,
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...typescriptPlugin.configs['strict-type-checked'].rules,
      ...typescriptPlugin.configs['stylistic-type-checked'].rules,
      ...prettierConfig.rules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'off',
    },
  },
  {
    files: ['*.config.js', '*.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.es2015,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'off',
    },
  },
  {
    files: ['*.config.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.es2015,
      },
      parserOptions: {
        sourceType: 'commonjs',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'off',
    },
  },
];
