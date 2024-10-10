/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2024–Present Tomáš Chochola <chocholatom1997@gmail.com>. All rights reserved.
 *
 * @license
 *
 * This software is proprietary and licensed under specific terms set by its owner.
 * Any form of access, use, or distribution requires a valid and active license.
 * For full licensing terms, refer to the LICENSE.md file accompanying this software.
 *
 * @see {@link https://premierstacks.com} Website
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
