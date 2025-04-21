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
    typescript.configs.strictTypeChecked,
    typescript.configs.stylisticTypeChecked,
    sonarjs.configs.recommended,
    {
      rules: {
        'sonarjs/void-use': 'off',

        'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true, named: true, defaultFrom: true, namedFrom: true, namespaceFrom: true } }],

        // "class-methods-use-this": "off",
        // "@typescript-eslint/class-methods-use-this": "error", // disadvantages
        // "consistent-return": "off",
        // "@typescript-eslint/consistent-return": "error", // handled by tsc
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        // "@typescript-eslint/explicit-function-return-type": "error", // disadvantages
        '@typescript-eslint/explicit-member-accessibility': 'error',
        // "@typescript-eslint/explicit-module-boundary-types": "error", // disadvantages
        // "init-declarations": "off",
        // "@typescript-eslint/init-declarations": "error", // disadvantages
        // "max-params": "off",
        // "@typescript-eslint/max-params": "error", // disadvantages
        // "@typescript-eslint/member-ordering": "error", // frozen
        '@typescript-eslint/method-signature-style': 'error',
        // "@typescript-eslint/naming-convention": "error", // frozen
        // "no-dupe-class-members": "off",
        // "@typescript-eslint/no-dupe-class-members": "error", // handled by tsc
        '@typescript-eslint/no-import-type-side-effects': 'error',
        // "no-invalid-this": "off",
        // "@typescript-eslint/no-invalid-this": "error", // handled by tsc
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        // "no-magic-numbers": "off",
        // "@typescript-eslint/no-magic-numbers": "error", // disadvantages
        // "no-redeclare": "off",
        // "@typescript-eslint/no-redeclare": "error", // handled by tsc
        // "no-restricted-imports": "off",
        // "@typescript-eslint/no-restricted-imports": "error", // stylistic
        // "@typescript-eslint/no-restricted-types": "error", // stylistic
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unsafe-type-assertion': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/parameter-properties': 'error',
        // "prefer-destructuring": "off",
        // "@typescript-eslint/prefer-destructuring": "error", // disadvantages
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        // "@typescript-eslint/prefer-readonly-parameter-types": "error", // disadvantages
        // "@typescript-eslint/promise-function-async": "error", // disadvantages
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowAny: false,
            allowNullableBoolean: false,
            allowNullableEnum: false,
            allowNullableNumber: false,
            allowNullableObject: false,
            allowNullableString: false,
            allowNumber: false,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            allowString: false,
          },
        ],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        // "@typescript-eslint/typedef": "error", // disadvantages
      },
    },
    typescript.configs.disableTypeChecked,
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
