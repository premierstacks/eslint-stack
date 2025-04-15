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

import { defineConfig } from 'eslint/config';
import { createEslintConfigNode, createEslintIgnorePatterns, createEslintOverridesForConfigs } from './src/index.js';

export default defineConfig([createEslintIgnorePatterns(), createEslintConfigNode(), createEslintOverridesForConfigs()]);
