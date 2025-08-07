import globals from 'globals';
import { EslintStack } from './builder.js';

export function base(options = {}) {
  const {
    nodeGlobals = {
      ...globals.node,
      ...globals.es2024,
    },
    browserGlobals = {
      ...globals.browser,
      ...globals.es2024,
    },
    nodeFiles = undefined,
    browserFiles = undefined,
    ignore = EslintStack.Selectors.GlobalIgnore,
    recommended = true,
    typescript = true,
    react = false,
    jsxA11y = false,
    reactHooks = false,
    reactCompiler = false,
    stylex = false,
    stylistic = true,
    sonarjs = true,
  } = options;

  let config = EslintStack.create();

  if (ignore.length > 0) {
    config = config.ignores({ patterns: ignore });
  }

  if (nodeFiles !== undefined) {
    config = config.globals({ globals: nodeGlobals }, nodeFiles ? { files: nodeFiles } : {});
  }

  if (browserFiles !== undefined) {
    config = config.globals({ globals: browserGlobals }, browserFiles ? { files: browserFiles } : {});
  }

  if (recommended) {
    config = config.recommended();
  }

  if (typescript) {
    config = config.typescript({}, { files: [...EslintStack.Selectors.GlobalTypeScript, ...EslintStack.Selectors.GlobalTypedReact] });
  }

  if (stylistic) {
    config = config.stylystic();
  }

  if (react) {
    config = config.react();
  }

  if (jsxA11y) {
    config = config.jsxA11y();
  }

  if (reactHooks) {
    config = config.reactHooks();
  }

  if (reactCompiler) {
    config = config.reactCompiler();
  }

  if (stylex) {
    config = config.stylex();
  }

  if (sonarjs) {
    config = config.sonarjs();
  }

  if (typescript) {
    config = config.typescriptDisabled({}, { files: [...EslintStack.Selectors.GlobalJavaScript, ...EslintStack.Selectors.GlobalReact] });
  }

  return config;
}

export function browser(options = {}) {
  return base({
    browserFiles: undefined,
    nodeFiles: EslintStack.Selectors.GlobalRC,
    recommended: true,
    typescript: false,
    react: false,
    jsxA11y: false,
    reactHooks: false,
    reactCompiler: false,
    stylex: false,
    stylistic: true,
    sonarjs: true,
    ...options,
  });
}

export function node(options = {}) {
  return base({
    browserFiles: undefined,
    nodeFiles: null,
    recommended: true,
    typescript: false,
    react: false,
    jsxA11y: false,
    reactHooks: false,
    reactCompiler: false,
    stylex: false,
    stylistic: true,
    sonarjs: true,
    ...options,
  });
}

export function browserTypescript(options = {}) {
  return base({
    browserFiles: null,
    nodeFiles: EslintStack.Selectors.GlobalRC,
    recommended: true,
    typescript: true,
    react: false,
    jsxA11y: false,
    reactHooks: false,
    reactCompiler: false,
    stylex: false,
    stylistic: true,
    sonarjs: true,
    ...options,
  });
}

export function nodeTypescript(options = {}) {
  return base({
    browserFiles: undefined,
    nodeFiles: null,
    recommended: true,
    typescript: true,
    react: false,
    jsxA11y: false,
    reactHooks: false,
    reactCompiler: false,
    stylex: false,
    stylistic: true,
    sonarjs: true,
    ...options,
  });
}

export function browserTypescriptReact(options = {}) {
  return base({
    browserFiles: null,
    nodeFiles: EslintStack.Selectors.GlobalRC,
    recommended: true,
    typescript: true,
    react: true,
    jsxA11y: true,
    reactHooks: true,
    reactCompiler: true,
    stylex: false,
    stylistic: true,
    sonarjs: true,
    ...options,
  });
}

export function browserTypescriptReactStylex(options = {}) {
  return base({
    browserFiles: null,
    nodeFiles: EslintStack.Selectors.GlobalRC,
    recommended: true,
    typescript: true,
    react: true,
    jsxA11y: true,
    reactHooks: true,
    reactCompiler: true,
    stylex: true,
    stylistic: true,
    sonarjs: true,
    ...options,
  });
}
