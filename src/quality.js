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
