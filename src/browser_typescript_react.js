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
import stylex from '@stylexjs/eslint-plugin';
import prettier from 'eslint-config-prettier/flat';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import compiler from 'eslint-plugin-react-compiler';
import hooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import typescript from 'typescript-eslint';

export function createEslintConfigBrowserTypescriptReact() {
  return defineConfig([
    eslint.configs.recommended,
    typescript.configs.strictTypeChecked,
    typescript.configs.stylisticTypeChecked,
    react.configs.flat['recommended'],
    react.configs.flat['jsx-runtime'],
    hooks.configs['recommended-latest'],
    a11y.flatConfigs.strict,
    {
      plugins: {
        '@stylexjs': stylex,
      },
      rules: {
        '@stylexjs/valid-styles': 'error',
        '@stylexjs/sort-keys': 'error',
        '@stylexjs/valid-shorthands': 'error',
        '@stylexjs/no-unused': 'error',
        '@stylexjs/no-legacy-media-queries': 'error',
      },
    },
    sonarjs.configs.recommended,
    compiler.configs.recommended,
    {
      rules: {
        'sonarjs/void-use': 'off',

        'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true, named: true, defaultFrom: true, namedFrom: true, namespaceFrom: true } }],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        'jsx-a11y/anchor-ambiguous-text': 'error',
        'jsx-a11y/control-has-associated-label': 'error',
        'jsx-a11y/lang': 'error',
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/prefer-tag-over-role': 'error',

        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/checked-requires-onchange-or-readonly': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': 'error',
        // 'react/forbid-component-props': 'error',
        // 'react/forbid-dom-props': 'error',
        // 'react/forbid-elements': 'error',
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': 'error',
        'react/forward-ref-uses-ref': 'error',
        'react/function-component-definition': 'error',
        'react/hook-use-state': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-boolean-value': 'error',
        // 'react/jsx-child-element-spacing': 'error', // prettier
        // 'react/jsx-closing-bracket-location': 'error', // prettier
        // 'react/jsx-closing-tag-location': 'error', // prettier
        'react/jsx-curly-brace-presence': 'error',
        // 'react/jsx-curly-newline': 'error', // prettier
        // 'react/jsx-curly-spacing': 'error', // prettier
        // 'react/jsx-equals-spacing': 'error', // prettier
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        // 'react/jsx-first-prop-new-line': 'error', // prettier
        'react/jsx-fragments': 'error',
        'react/jsx-handler-names': 'error',
        // 'react/jsx-indent': 'error', // prettier
        // 'react/jsx-indent-props': 'error', // prettier
        // 'react/jsx-max-depth': 'error',
        // 'react/jsx-max-props-per-line': 'error', // prettier
        // 'react/jsx-newline': 'error', // prettier
        'react/jsx-no-bind': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-leaked-render': 'error',
        'react/jsx-no-literals': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'error',
        // 'react/jsx-one-expression-per-line': 'error', // prettier
        'react/jsx-pascal-case': 'error',
        // 'react/jsx-props-no-multi-spaces': 'error', // prettier
        'react/jsx-props-no-spread-multi': 'error',
        // 'react/jsx-props-no-spreading': 'error',
        // 'react/jsx-sort-props': 'error',
        // 'react/jsx-tag-spacing': 'error', // prettier
        // 'react/jsx-wrap-multilines': 'error', // prettier
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-danger': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-invalid-html-attribute': 'error',
        // 'react/no-multi-comp': 'error',
        'react/no-namespace': 'error',
        'react/no-object-type-as-default-prop': 'error',
        'react/no-redundant-should-component-update': 'error',
        // 'react/no-set-state': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unsafe': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-exact-props': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': 'error',
        // 'react/require-default-props': 'error',
        'react/require-optimization': 'error',
        'react/self-closing-comp': 'error',
        // 'react/sort-comp': 'error',
        // 'react/sort-default-props': 'error',
        // 'react/sort-prop-types': 'error',
        'react/state-in-constructor': 'error',
        'react/static-property-placement': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

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
    prettier,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
        },
      },
    },
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]);
}
