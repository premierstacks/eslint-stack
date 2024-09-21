/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved
 *
 * @license
 *
 * This software is proprietary property of Tomáš Chochola and protected by copyright laws.
 * A valid license is required for any use or manipulation of the software or source code.
 * The full license terms are detailed in the LICENSE.md file within the source code repository.
 *
 * @see {@link https://github.com/tomchochola} Personal GitHub
 * @see {@link https://premierstacks.com} Premierstacks website
 * @see {@link https://github.com/premierstacks} Premierstacks GitHub
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
