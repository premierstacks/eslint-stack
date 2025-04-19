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

import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import typescript from 'typescript-eslint';

export function createEslintConfigIgnores() {
  return globalIgnores(['**/.DS_Store', '**/.fleet', '**/.idea', '**/.vscode', '**/.zed']);
}

export function createEslintConfigIgnoresRoot() {
  return globalIgnores(['*.tsx', '*.mts', '*.ts', '*.cts', '*.jsx', '*.mjs', '*.js', '*.cjs']);
}

export function createEslintConfigIgnoresRc() {
  return globalIgnores(['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs', '*.config.cjs', '.*rc.cjs']);
}

export function createEslintConfigLooseRc() {
  return defineConfig([
    {
      extends: [typescript.configs.disableTypeChecked],
      files: ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs', '*.config.cjs', '.*rc.cjs'],
    },
    {
      files: ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs', '*.config.cjs', '.*rc.cjs'],
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.es2024,
        },
      },
    },
  ]);
}
