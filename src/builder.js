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

import { createEslintConfig, withRecommended, withIgnores, withGlobals } from './base.js';
import { withSonarjs } from './quality.js';
import { withJsxA11y, withReactCompiler, withReactHooks, withReact, withStylex } from './react.js';
import { withStylistic } from './stylistic.js';
import { withTypescriptDisabled, withTypescript } from './typescript.js';
import * as selectors from './selectors.js';
import { defineConfig } from 'eslint/config';
import * as presets from './presets.js';

export class EslintStack {
  #config;
  #options;

  constructor(config, options = {}) {
    this.#config = config;
    this.#options = options;
  }

  static create(options = {}) {
    const merged = {
      ...options,
      environment: options.environment ?? process.env.NODE_ENV ?? 'production',
    };

    return new EslintStack(createEslintConfig(merged), merged);
  }

  recommended(options = {}, override = {}) {
    return new EslintStack(withRecommended(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  typescript(options = {}, override = {}) {
    return new EslintStack(withTypescript(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  react(options = {}, override = {}) {
    return new EslintStack(withReact(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  reactHooks(options = {}, override = {}) {
    return new EslintStack(withReactHooks(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  reactCompiler(options = {}, override = {}) {
    return new EslintStack(withReactCompiler(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  jsxA11y(options = {}, override = {}) {
    return new EslintStack(withJsxA11y(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  stylex(options = {}, override = {}) {
    return new EslintStack(withStylex(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  stylystic(options = {}, override = {}) {
    return new EslintStack(withStylistic(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  sonarjs(options = {}, override = {}) {
    return new EslintStack(withSonarjs(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  globals(options = {}, override = {}) {
    return new EslintStack(withGlobals(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  ignores(options = {}, override = {}) {
    return new EslintStack(withIgnores(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  typescriptDisabled(options = {}, override = {}) {
    return new EslintStack(withTypescriptDisabled(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  options(options) {
    return new EslintStack(this.#config, {
      ...this.#options,
      ...options,
    });
  }

  add(config) {
    return new EslintStack([...this.#config, ...config], this.#options);
  }

  build() {
    return defineConfig([this.#config]);
  }

  static get Selectors() {
    return selectors;
  }

  static get Presets() {
    return presets;
  }
}
