/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved
 *
 * @license
 *
 * This software is proprietary property of Tomáš Chochola and protected by copyright laws.
 * A valid license is required for any use or manipulation of the software or source code.
 * The full license terms are detailed in the LICENSE.md file within the source code repository.
 *
 * @see {@link https://github.com/tomchochola} Personal GitHub
 * @see {@link https://premierstacks.com} Premierstacks website
 * @see {@link https://github.com/premierstacks} Premierstacks GitHub
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import globals from 'globals';
import js from '@eslint/js';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export function nodeTypescriptReact(ecmaVersion = 'latest', env = { ...globals.node, ...globals.es2021 }, reactVersion = '18.3.1') {
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
          ecmaFeatures: {
            jsx: true,
            jsxPragma: null,
          },
        },
      },
      plugins: {
        '@typescript-eslint': typescriptPlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        'jsx-a11y': jsxA11yPlugin,
        prettier: prettierPlugin,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactPlugin.configs.recommended.rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
        ...reactHooksPlugin.configs.recommended.rules,
        ...jsxA11yPlugin.configs.strict.rules,
        ...prettierConfig.rules,
        ...prettierPlugin.configs.recommended.rules,
        'prettier/prettier': 'off',
      },
      settings: {
        react: {
          version: reactVersion,
        },
      },
    },
    {
      files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
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
          ecmaFeatures: {
            jsx: true,
            jsxPragma: null,
          },
        },
      },
      plugins: {
        '@typescript-eslint': typescriptPlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        'jsx-a11y': jsxA11yPlugin,
        prettier: prettierPlugin,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactPlugin.configs.recommended.rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
        ...reactHooksPlugin.configs.recommended.rules,
        ...jsxA11yPlugin.configs.strict.rules,
        ...prettierConfig.rules,
        ...prettierPlugin.configs.recommended.rules,
        'prettier/prettier': 'off',
      },
      settings: {
        react: {
          version: reactVersion,
        },
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        sourceType: 'module',
        ecmaVersion: ecmaVersion,
        globals: env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: ecmaVersion,
          project: './tsconfig.json',
          ecmaFeatures: {
            jsx: true,
            jsxPragma: null,
          },
        },
      },
      plugins: {
        '@typescript-eslint': typescriptPlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        'jsx-a11y': jsxA11yPlugin,
        prettier: prettierPlugin,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
        ...typescriptPlugin.configs['strict-type-checked'].rules,
        ...typescriptPlugin.configs['stylistic-type-checked'].rules,
        ...reactPlugin.configs.recommended.rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
        ...reactHooksPlugin.configs.recommended.rules,
        ...jsxA11yPlugin.configs.strict.rules,
        ...prettierConfig.rules,
        ...prettierPlugin.configs.recommended.rules,
        'prettier/prettier': 'off',
      },
      settings: {
        react: {
          version: reactVersion,
        },
      },
    },
  ];
}
