/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025, Tomáš Chochola <chocholatom1997@gmail.com>. Some rights reserved.
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

const def = [
  '**/.DS_Store',
  '**/.env',
  '**/.env.backup',
  '**/.env.development',
  '**/.env.local',
  '**/.env.production',
  '**/.env.staging',
  '**/.env.testing',
  '**/.fleet',
  '**/.idea',
  '**/.vscode',
  '**/Homestead.json',
  '**/Homestead.yaml',
  '**/auth.json',
  '**/npm-debug.log',
  '**/yarn-error.log',
  '.php-cs-fixer.cache',
  '.phpunit.cache',
  '.phpunit.coverage',
  '.phpunit.result.cache',
  'assets/vendor',
  'build',
  'dist',
  'node_modules',
  'public/build',
  'public/hot',
  'public/storage',
  'public/vendor',
  'resources/vendor',
  'static/vendor',
  'storage',
  'storage/*.key',
  'vendor',
];

export function ignores(options = def) {
  return [
    {
      ignores: options,
    },
  ];
}
