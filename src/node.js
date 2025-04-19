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

import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import typescript from 'typescript-eslint';

export function createEslintConfigNode() {
  return defineConfig([
    eslint.configs.recommended,
    typescript.configs.strict,
    typescript.configs.stylistic,
    sonarjs.configs.recommended,
    prettier,
    {
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.es2024,
        },
      },
    },
  ]);
}
