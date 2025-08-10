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

import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';

export function withSonarjs(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [
        sonarjs.configs.recommended,
        {
          rules: {
            'sonarjs/void-use': 'off',
            'sonarjs/cognitive-complexity': 'off',
          },
        },
      ],
      ...override,
    },
  ]);
}
