/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2024–Present Tomáš Chochola <chocholatom1997@gmail.com>. All rights reserved.
 *
 * @license
 *
 * This software is proprietary and licensed under specific terms set by its owner.
 * Any form of access, use, or distribution requires a valid and active license.
 * For full licensing terms, refer to the LICENSE.md file accompanying this software.
 *
 * @see {@link https://premierstacks.com} Website
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
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

const def = { reactVersion: '18.3.1', ecmaVersion: 'latest', env: { ...globals.browser, ...globals.es2020 } };

export function browserTypescriptReact(options = def) {
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
          version: options.reactVersion,
        },
      },
    },
    {
      files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
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
          version: options.reactVersion,
        },
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        sourceType: 'module',
        ecmaVersion: options.ecmaVersion,
        globals: options.env,
        parser: typescriptParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: options.ecmaVersion,
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
          version: options.reactVersion,
        },
      },
    },
  ];
}
