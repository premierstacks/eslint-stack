/**
 * Copyright © 2024+ [Tomáš Chochola](https://github.com/tomchochola) <chocholatom1997@gmail.com>
 *
 * This file is part of proprietary software developed by Tomáš Chochola. Despite potential public availability,
 * this software is not free or open-source. A license is required for any form of use.
 *
 * For licensing inquiries or to obtain a license, please contact Tomáš Chochola directly or visit:
 * GitHub Sponsors page: https://github.com/sponsors/tomchochola
 *
 * The full terms and conditions of the license are outlined in the LICENSE.md file accompanying the source code.
 *
 * Stay updated and support the development:
 * - Email: <chocholatom1997@gmail.com>
 * - GitHub: https://github.com/tomchochola
 * - Sponsor & License: https://github.com/sponsors/tomchochola
 */

import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default function (ecmaVersion = 2021, env = { ...globals.browser, ...globals.es2015 }) {
  return [
    {
      files: ['**/*.cjs'],
      ignores: ['*.config.cjs', '.*rc.cjs'],
      languageOptions: {
        sourceType: 'commonjs',
        ecmaVersion: ecmaVersion,
        globals: env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'commonjs',
          ecmaVersion: ecmaVersion,
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
        ecmaVersion: ecmaVersion,
        globals: env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: ecmaVersion,
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
        ecmaVersion: ecmaVersion,
        globals: env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: ecmaVersion,
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
  ];
}
