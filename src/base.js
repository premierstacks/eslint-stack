/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';

export function createEslintConfig() {
  return defineConfig([]);
}

export function withRecommended(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [
        eslint.configs.recommended,
        {
          rules: {
            'no-restricted-exports': [
              'error',
              {
                restrictDefaultExports: {
                  direct: true,
                  named: true,
                  defaultFrom: true,
                  namedFrom: true,
                  namespaceFrom: true,
                },
              },
            ],
          },
        },
      ],
      ...override,
    },
  ]);
}

export function withIgnores(config, options = {}, override = {}) {
  const {
    patterns = [],
    name = undefined,
  } = options;

  return defineConfig([
    ...config,
    {
      extends: [globalIgnores(patterns, name)],
      ...override,
    },
  ]);
}

export function withGlobals(config, options = {}, override = {}) {
  const { globals = {} } = options;

  return defineConfig([
    ...config,
    {
      extends: [
        {
          languageOptions: {
            globals: globals,
          },
        },
      ],
      ...override,
    },
  ]);
}
