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
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default function (reactVersion = '18.2.0', ecmaVersion = 2021, env = { ...globals.browser, ...globals.es2015 }) {
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
