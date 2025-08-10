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

import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export function withStylistic(config, options = {}, override = {}) {
  return defineConfig([
    ...config,
    {
      extends: [
        stylistic.configs.customize({
          indent: 2,
          quotes: 'single',
          semi: true,
          jsx: true,
          arrowParens: true,
          braceStyle: '1tbs',
          blockSpacing: true,
          quoteProps: 'consistent-as-needed',
          commaDangle: 'always-multiline',
          ...options,
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

            // '@stylistic/newline-per-chained-call': ['error'],
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
            '@stylistic/jsx-child-element-spacing': 'error',
            '@stylistic/jsx-pascal-case': 'error',
            '@stylistic/jsx-props-no-multi-spaces': 'error',
            '@stylistic/jsx-self-closing-comp': 'error',

            '@stylistic/jsx-max-props-per-line': [
              'error',
              {
                maximum: 1,
                when: 'always',
              },
            ],
            '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'none' }],
            '@stylistic/jsx-first-prop-new-line': ['error', 'always'],
          },
        },
        stylistic.configs['disable-legacy'],
      ],
      ...override,
    },
  ]);
}
