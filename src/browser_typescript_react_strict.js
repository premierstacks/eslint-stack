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

/* eslint-disable @stylistic/multiline-comment-style */
/* eslint-disable @stylistic/lines-around-comment */

import eslint from '@eslint/js';
import stylex from '@stylexjs/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import compiler from 'eslint-plugin-react-compiler';
import hooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import typescript from 'typescript-eslint';

export function createEslintConfigBrowserTypescriptReactStrict() {
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
    compiler.configs.recommended,
    react.configs.flat['recommended'],
    react.configs.flat['jsx-runtime'],
    {
      rules: {
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
        // 'react/jsx-child-element-spacing': 'error', // disabled by @stylystic
        // 'react/jsx-closing-bracket-location': 'error', // disabled by @stylystic
        // 'react/jsx-closing-tag-location': 'error', // disabled by @stylystic
        // 'react/jsx-curly-brace-presence': 'error', // disabled by @stylystic
        // 'react/jsx-curly-newline': 'error', // disabled by @stylystic
        // 'react/jsx-curly-spacing': 'error', // disabled by @stylystic
        // 'react/jsx-equals-spacing': 'error', // disabled by @stylystic
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        // 'react/jsx-first-prop-new-line': 'error', // disabled by @stylystic
        'react/jsx-fragments': 'error',
        'react/jsx-handler-names': 'error',
        // 'react/jsx-indent': 'error', // disabled by @stylystic
        // 'react/jsx-indent-props': 'error', // disabled by @stylystic
        // 'react/jsx-max-depth': 'error',
        // 'react/jsx-max-props-per-line': 'error', // disabled by @stylystic
        // 'react/jsx-newline': 'error', // disabled by @stylystic
        'react/jsx-no-bind': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-leaked-render': 'error',
        'react/jsx-no-literals': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'error',
        // 'react/jsx-one-expression-per-line': 'error', // disabled by @stylystic
        'react/jsx-pascal-case': 'error',
        // 'react/jsx-props-no-multi-spaces': 'error', // disabled by @stylystic
        'react/jsx-props-no-spread-multi': 'error',
        // 'react/jsx-props-no-spreading': 'error',
        // 'react/jsx-sort-props': 'error', // disabled by @stylystic
        // 'react/jsx-tag-spacing': 'error', // disabled by @stylystic
        // 'react/jsx-wrap-multilines': 'error', // disabled by @stylystic
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
        // 'react/self-closing-comp': 'error', // disabled by @stylystic
        // 'react/sort-comp': 'error',
        // 'react/sort-default-props': 'error',
        // 'react/sort-prop-types': 'error',
        'react/state-in-constructor': 'error',
        'react/static-property-placement': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
      },
    },
    hooks.configs['recommended-latest'],
    {
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },
    a11y.flatConfigs.strict,
    {
      rules: {
        'jsx-a11y/anchor-ambiguous-text': 'error',
        'jsx-a11y/control-has-associated-label': 'error',
        'jsx-a11y/lang': 'error',
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/prefer-tag-over-role': 'error',
      },
    },
    {
      plugins: {
        '@stylexjs': stylex,
      },
      rules: {
        '@stylexjs/valid-styles': [
          'error',
          {
            propLimits: {
              all: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              animation: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              animationRange: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              background: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              backgroundPosition: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              blockSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              border: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockEndColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockEndStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockEndWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockStartColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockStartStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockStartWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBlockWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBottom: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBottomEndRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderBottomStartRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderEndColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderEndEndRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderEndStartRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderEndStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderEndWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderHorizontal: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderHorizontalColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderHorizontalStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderHorizontalWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderImage: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineEndColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineEndStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineEndWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineStartColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineStartStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineStartWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderInlineWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderLeft: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderRight: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStartColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStartEndRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStartStartRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStartStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStartWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderTop: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderTopEndRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderTopStartRadius: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderVertical: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderVerticalColor: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderVerticalStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderVerticalWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              borderWidth: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              columnRule: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              columns: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              containIntrinsicBlockSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              containIntrinsicInlineSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              containIntrinsicSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              container: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              end: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              flex: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              flexFlow: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              font: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              fontSynthesis: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              fontVariant: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gap: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              grid: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridArea: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridColumn: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridColumnGap: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridGap: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridRow: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridRowGap: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              gridTemplate: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              inlineSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              inset: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              insetBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              insetBlockEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              insetBlockStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              insetInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              insetInlineEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              insetInlineStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              listStyle: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              margin: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginBlockEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginBlockStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginHorizontal: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginInlineEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginInlineStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              marginVertical: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              mask: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              maskBorder: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              maxBlockSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              maxInlineSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              minBlockSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              minInlineSize: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              offset: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              outline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              overflow: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              overflowBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              overflowInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              overscrollBehavior: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              overscrollBehaviorBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              overscrollBehaviorInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              padding: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingBlockEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingBlockStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingHorizontal: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingInlineEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingInlineStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              paddingVertical: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              placeContent: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              placeItems: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              placeSelf: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMargin: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMarginBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMarginBlockEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMarginBlockStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMarginInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMarginInlineEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollMarginInlineStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPadding: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPaddingBlock: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPaddingBlockEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPaddingBlockStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPaddingInline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPaddingInlineEnd: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollPaddingInlineStart: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollSnapType: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              scrollTimeline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              start: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              textBox: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              textDecoration: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              textEmphasis: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              textWrap: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              transition: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
              viewTimeline: {
                limit: null,
                reason: 'Only longhand properties are allowed.',
              },
            },
          },
        ],
        '@stylexjs/sort-keys': 'error',
        '@stylexjs/valid-shorthands': 'error',
        '@stylexjs/no-unused': 'error',
        '@stylexjs/no-legacy-contextual-styles': 'error',
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
      jsx: true,
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
    stylistic.configs['disable-legacy'],
  ]);
}
