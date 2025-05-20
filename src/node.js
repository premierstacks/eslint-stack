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

/* eslint-disable @stylistic/multiline-comment-style */
/* eslint-disable @stylistic/lines-around-comment */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import typescript from 'typescript-eslint';

export function createEslintConfigNode() {
  return defineConfig([
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
    typescript.configs.strictTypeChecked,
    typescript.configs.stylisticTypeChecked,
    {
      rules: {
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
    sonarjs.configs.recommended,
    {
      rules: {
        'sonarjs/void-use': 'off',
      },
    },
    stylistic.configs.customize({
      indent: 2,
      quotes: 'single',
      semi: true,
      jsx: false,
      arrowParens: true,
      braceStyle: '1tbs',
      blockSpacing: true,
      quoteProps: 'consistent-as-needed',
      commaDangle: 'always-multiline',
    }),
    {
      rules: {
        '@stylistic/array-bracket-newline': 'error',
        '@stylistic/array-element-newline': [
          'error',
          {
            consistent: true,
            multiline: true,
          },
        ],
        '@stylistic/curly-newline': ['error', 'always'],
        '@stylistic/func-call-spacing': 'error',
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/implicit-arrow-linebreak': 'error',
        '@stylistic/line-comment-position': 'error',
        '@stylistic/linebreak-style': 'error',
        '@stylistic/lines-around-comment': [
          'error',
          {
            beforeBlockComment: true,
            beforeLineComment: true,
            afterHashbangComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true,
            allowEnumStart: true,
            allowInterfaceStart: true,
            allowModuleStart: true,
            allowTypeStart: true,
          },
        ],
        // '@stylistic/max-len': ['error', { code: 200 }],
        '@stylistic/multiline-comment-style': 'error',
        // '@stylistic/newline-per-chained-call': ['error'], // stylystic
        '@stylistic/no-confusing-arrow': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/nonblock-statement-body-position': 'error',
        '@stylistic/object-curly-newline': [
          'error',
          {
            consistent: true,
            multiline: true,
          },
        ],
        '@stylistic/object-property-newline': 'error',
        '@stylistic/one-var-declaration-per-line': ['error', 'always'],
        '@stylistic/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'break',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'case',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'class',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'continue',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'debugger',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'default',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'do',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'export',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'for',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'function',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'if',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'switch',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'throw',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'try',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'while',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'with',
          },
          {
            blankLine: 'always',
            prev: ['const', 'let', 'var'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: ['singleline-const', 'singleline-let', 'singleline-var'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: ['multiline-const', 'multiline-let', 'multiline-var'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: 'import',
            next: '*',
          },
          {
            blankLine: 'always',
            prev: 'cjs-import',
            next: '*',
          },
          {
            blankLine: 'always',
            prev: 'export',
            next: '*',
          },
          {
            blankLine: 'any',
            prev: 'singleline-const',
            next: 'singleline-const',
          },
          {
            blankLine: 'any',
            prev: 'singleline-let',
            next: 'singleline-let',
          },
          {
            blankLine: 'any',
            prev: 'singleline-var',
            next: 'singleline-var',
          },
          {
            blankLine: 'any',
            prev: 'import',
            next: 'import',
          },
          {
            blankLine: 'any',
            prev: 'cjs-import',
            next: 'cjs-import',
          },
          {
            blankLine: 'any',
            prev: 'export',
            next: 'export',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'multiline-const',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'multiline-let',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'multiline-var',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'multiline-export',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'block-like',
          },
          {
            blankLine: 'always',
            prev: 'block-like',
            next: '*',
          },
        ],
        '@stylistic/semi-style': 'error',
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/wrap-regex': 'error',
      },
    },
    {
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.es2024,
        },
      },
    },
    typescript.configs.disableTypeChecked,
    stylistic.configs['disable-legacy'],
  ]);
}
