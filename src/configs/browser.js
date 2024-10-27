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

import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const def = { ecmaVersion: 2020, env: { ...globals.browser, ...globals.es2020 } };

export function browser(options = def) {
  options = { ...def, ...options };

  return [
    {
      files: ['**/*.cjs'],
      ignores: ['*.config.cjs', '.*rc.cjs'],
      languageOptions: {
        sourceType: 'commonjs',
        ecmaVersion: options.ecmaVersion,
        globals: options.env,
        parserOptions: {
          sourceType: 'commonjs',
          ecmaVersion: options.ecmaVersion,
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
      files: ['**/*.js', '**/*.mjs'],
      ignores: ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs'],
      languageOptions: {
        sourceType: 'module',
        ecmaVersion: options.ecmaVersion,
        globals: options.env,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: options.ecmaVersion,
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
}
