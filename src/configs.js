/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license Apache-2.0
 *
 * @see {@link http://www.apache.org/licenses/LICENSE-2.0} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const def = { ecmaVersion: 2022, env: { ...globals.node, ...globals.es2022 } };

export function createEslintOverridesForConfigs(options = def) {
  options = { ...def, ...options };

  return [
    {
      files: ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs'],
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
    {
      files: ['*.config.cjs', '.*rc.cjs'],
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
  ];
}
