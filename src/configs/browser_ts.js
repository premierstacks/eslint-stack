/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved
 *
 * @license
 *
 * This software is the exclusive property of Tomáš Chochola, protected by copyright laws.
 * Although the source code may be accessible, it is not free for use without a valid license.
 * A valid license, obtainable through proper channels, is required for any software use.
 * For licensing or inquiries, please contact Tomáš Chochola or refer to the GitHub Sponsors page.
 *
 * The full license terms are detailed in the LICENSE.md file within the source code repository.
 * The terms are subject to changes. Users are encouraged to review them periodically.
 *
 * @see {@link https://github.com/tomchochola} Personal GitHub
 * @see {@link https://github.com/premierstacks} Premierstacks GitHub
 * @see {@link https://github.com/sponsors/tomchochola} Sponsor & License
 * @see {@link https://premierstacks.com} Premierstacks website
 */

import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export function browserTs(ecmaVersion = 2021, env = { ...globals.browser, ...globals.es2015 }) {
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
