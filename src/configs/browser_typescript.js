/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025, Tomáš Chochola <chocholatom1997@gmail.com>. Some rights reserved.
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const def = { ecmaVersion: 'latest', env: { ...globals.browser, ...globals.es2020 } };

export function browserTypescript(options = def) {
  options = { ...def, ...options };

  return [
    {
      files: ['**/*.cjs'],
      ignores: ['*.config.cjs', '.*rc.cjs'],
      languageOptions: {
        sourceType: 'commonjs',
        ecmaVersion: options.ecmaVersion,
        globals: options.env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'commonjs',
          ecmaVersion: options.ecmaVersion,
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
      ignores: ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs'],
      languageOptions: {
        sourceType: 'module',
        ecmaVersion: options.ecmaVersion,
        globals: options.env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: options.ecmaVersion,
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
        ecmaVersion: options.ecmaVersion,
        globals: options.env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: options.ecmaVersion,
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
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    },
  ];
}
