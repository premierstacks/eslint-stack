import a11y from 'eslint-plugin-jsx-a11y';
import compiler from 'eslint-plugin-react-compiler';
import hooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import stylex from '@stylexjs/eslint-plugin';
import { defineConfig } from 'eslint/config';

export function withReact(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [
        react.configs.flat['recommended'],
        react.configs.flat['jsx-runtime'],
        {
          rules: {
            'react/boolean-prop-naming': 'error',
            'react/button-has-type': 'error',
            'react/checked-requires-onchange-or-readonly': 'error',
            'react/default-props-match-prop-types': 'error',
            'react/destructuring-assignment': 'error',

            /*
             * 'react/forbid-component-props': 'error',
             * 'react/forbid-dom-props': 'error',
             * 'react/forbid-elements': 'error',
             */
            'react/forbid-foreign-prop-types': 'error',
            'react/forbid-prop-types': 'error',
            'react/forward-ref-uses-ref': 'error',
            'react/function-component-definition': 'error',
            'react/hook-use-state': 'error',
            'react/iframe-missing-sandbox': 'error',
            'react/jsx-boolean-value': 'error',

            /*
             * 'react/jsx-child-element-spacing': 'error', // disabled by @stylystic
             * 'react/jsx-closing-bracket-location': 'error', // disabled by @stylystic
             * 'react/jsx-closing-tag-location': 'error', // disabled by @stylystic
             * 'react/jsx-curly-brace-presence': 'error', // disabled by @stylystic
             * 'react/jsx-curly-newline': 'error', // disabled by @stylystic
             * 'react/jsx-curly-spacing': 'error', // disabled by @stylystic
             * 'react/jsx-equals-spacing': 'error', // disabled by @stylystic
             */
            'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

            // 'react/jsx-first-prop-new-line': 'error', // disabled by @stylystic
            'react/jsx-fragments': 'error',
            'react/jsx-handler-names': 'error',

            /*
             * 'react/jsx-indent': 'error', // disabled by @stylystic
             * 'react/jsx-indent-props': 'error', // disabled by @stylystic
             * 'react/jsx-max-depth': 'error',
             * 'react/jsx-max-props-per-line': 'error', // disabled by @stylystic
             * 'react/jsx-newline': 'error', // disabled by @stylystic
             */
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

            /*
             * 'react/jsx-props-no-spreading': 'error',
             * 'react/jsx-sort-props': 'error', // disabled by @stylystic
             * 'react/jsx-tag-spacing': 'error', // disabled by @stylystic
             * 'react/jsx-wrap-multilines': 'error', // disabled by @stylystic
             */
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

            /*
             * 'react/self-closing-comp': 'error', // disabled by @stylystic
             * 'react/sort-comp': 'error',
             * 'react/sort-default-props': 'error',
             * 'react/sort-prop-types': 'error',
             */
            'react/state-in-constructor': 'error',
            'react/static-property-placement': 'error',
            'react/style-prop-object': 'error',
            'react/void-dom-elements-no-children': 'error',
          },
        },
        {
          settings: {
            react: {
              version: 'detect',
            },
          },
        },
      ],
      ...override,
    },
  ]);
}

export function withReactHooks(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [
        hooks.configs['recommended-latest'],
        {
          rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
          },
        },
      ],
      ...override,
    },
  ]);
}

export function withReactCompiler(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [compiler.configs.recommended],
      ...override,
    },
  ]);
}

export function withJsxA11y(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [
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
      ],
      ...override,
    },
  ]);
}

export function withStylex(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return defineConfig([
    ...config,
    {
      extends: [
        {
          plugins: {
            '@stylexjs': stylex,
          },
          rules: {
            '@stylexjs/valid-styles': [
              'error',
              {
                propLimits: {
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
      ],
      ...override,
    },
  ]);
}
