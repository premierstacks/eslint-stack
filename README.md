# [ESLint Stack](https://github.com/premierstacks/eslint-stack) by [Tomáš Chochola](https://github.com/tomchochola)

A premium, preconfigured ESLint stack that saves developers time and ensures top-tier code quality without manual setup. Ideal for high-stakes environments in individual, corporate, and government projects.

## 💡 Idea Behind Premierstacks

Premierstacks is a comprehensive solution designed to cover both the development environment and the runtime provisioning/release process to production servers.

It includes everything from basic project structures to configurations for unit tests, static analysis, linters, automatic code fixers, and compilation or transpilation. Premierstacks ensures that your entire workflow, from development to production deployment, operates smoothly.

With a single license, you gain access to multiple libraries and guides that allow you to focus on business logic while Premierstacks handles both development and runtime environments.

This software is proprietary and designed for serious developers who value precision and professionalism. Ensure compliance by securing your license today.

## ⚡ Why Choose This Solution?

- **Premier Quality**

  Crafted for discerning developers and teams aiming for the highest standards.

- **Expertly Crafted**

  Built by professionals after hundreds of hours of research and testing.

- **Production-Ready**

  Fully tested in real-world production environments.

- **Efficient Setup**

  Get up and running with minimal effort and immediate results.

- **Regular Updates**

  Stay aligned with the latest ESLint standards and best practices.

- **Versatile**

  Supports browser, Node.js, React, and TypeScript environments.

## 🛡️ License & Usage

**Copyright © 2024+ Tomáš Chochola <chocholatom1997@gmail.com> - All Rights Reserved**

[![License](https://img.shields.io/badge/License-©_Proprietary-blue.svg)](LICENSE.md)

This software is proprietary property of Tomáš Chochola and protected by copyright laws.<br />
A valid license is required for any use or manipulation of the software or source code.<br />
The full license terms are detailed in the LICENSE.md file within the source code repository.

One license grants you access to all Premierstacks products, ensuring a unified solution for your development and production needs.

**Purchase a license here**: [GitHub Sponsors](https://github.com/sponsors/tomchochola)

**See full terms in**: [LICENSE.md](LICENSE.md)

## 📦 Module exports

Here are the available module exports and their use cases:

```js
import * as m from '@premierstacks/eslint-stack';

// for browser-based TypeScript projects with React
m.browserTypescriptReact(reactVersion = '18.3.1', ecmaVersion = 'latest', env = { ...globals.browser, ...globals.es2020 }): [object];

// for browser-based TypeScript projects
m.browserTypescript(ecmaVersion = 'latest', env = { ...globals.browser, ...globals.es2020 }): [object];

// for browser-based JavaScript projects
m.browser(ecmaVersion = 2020, env = { ...globals.browser, ...globals.es2020 }): [object];

// for Node.js-based TypeScript projects
m.nodeTypescript(ecmaVersion = 'latest', env = { ...globals.node, ...globals.es2021 }): [object];

// for Node.js-based JavaScript projects
m.node(ecmaVersion = 2022, env = { ...globals.node, ...globals.es2021 }): [object];

// configure dot files and various configuration files
m.configs(ecmaVersion = 2022, env = { ...globals.node, ...globals.es2021 }): [object];

// base set of ignore patterns
m.ignores(merge = [], base = IGNORES_BASE): [object];
```

## 🧩 Templates

Explore the predefined templates for various configurations in the `/templates` directory. These templates provide quick-start setups for different environments.

- **[/templates/browser_typescript_react.config.js](/templates/browser_typescript_react.config.js)**

  For browser-based TypeScript projects with React.

- **[/templates/browser_typescript.config.js](/templates/browser_typescript.config.js)**

  For browser-based TypeScript projects.

- **[/templates/browser.config.js](/templates/browser.config.js)**

  For browser-based JavaScript projects.

- **[/templates/node_typescript.config.js](/templates/node_typescript.config.js)**

  For Node.js-based TypeScript projects.

- **[/templates/node.config.js](/templates/node.config.js)**

  For Node.js-based JavaScript projects.

## 🚀 Getting Started

1️⃣ **Review the documentation and license**

Ensure this package fits your needs and that you agree with the terms.

2️⃣ **Purchase a license**

Obtain a valid license through [GitHub Sponsors](https://github.com/sponsors/tomchochola).

3️⃣ **Install the package**

Install using npm:

```bash
npm install --save-dev github:premierstacks/eslint-stack
```

4️⃣ **Select a template**

Choose one of the predefined configuration templates from the `/templates` directory that best suits your project’s needs. Use the `cp` command to copy it into your project as `eslint.config.js`:

```bash
cp ./node_modules/@premierstacks/eslint-stack/templates/browser_typescript_react.config.js ./eslint.config.js
# or
cp ./node_modules/@premierstacks/eslint-stack/templates/browser_typescript.config.js ./eslint.config.js
# or
cp ./node_modules/@premierstacks/eslint-stack/templates/browser.config.js ./eslint.config.js
# or
cp ./node_modules/@premierstacks/eslint-stack/templates/node_typescript.config.js ./eslint.config.js
# or
cp ./node_modules/@premierstacks/eslint-stack/templates/node.config.js ./eslint.config.js
```

5️⃣ **CLI**

Execute commands:

```bash
# Automatically fix code style issues
./node_modules/.bin/eslint --fix .

# Run ESLint and perform static analysis
./node_modules/.bin/eslint .
```

## 👤 The Author: Tomáš Chochola

Tomáš Chochola is a leading software developer known for delivering precision-crafted, enterprise-grade solutions. With deep expertise in multiple cutting-edge technologies, Tomáš focuses on ensuring top-tier code quality and efficiency for every project.

**Email**: <chocholatom1997@gmail.com><br />
**Premierstacks website**: [https://premierstacks.com](https://premierstacks.com)<br />
**Personal GitHub**: [https://github.com/tomchochola](https://github.com/tomchochola)<br />
**Premierstacks GitHub**: [https://github.com/premierstacks](https://github.com/premierstacks)<br />
**GitHub Sponsors**: [https://github.com/sponsors/tomchochola](https://github.com/sponsors/tomchochola)

His areas of specialization include:

- DevOps and AWS
- PHP and Laravel
- Secure coding practices
- Code style and best practices
- Helper functions and libraries
- TypeScript, React, and Webpack
- Reusable templates and configuration stacks
- Development on Windows 11 and Ubuntu 22/24 (WSL2)
- ESLint, Prettier, PHP CS Fixer, PostCSS, and Stylelint

## 💼 Hire Me

Whether you need short-term code assistance, in-depth analysis, or help integrating premium packages, I'm available for collaboration. Let's take your project to the next level.

You can also support my work by becoming a sponsor through [GitHub Sponsors](https://github.com/sponsors/tomchochola).

If you're interested in hiring me for any of the above or for solving IT issues, feel free to reach out. I'm open to collaboration, whether it's for new packages, ongoing projects, or quick IT fixes.

## 🌳 Project Structure (Tree)

Below is an example of the project structure you will receive upon purchasing the ESLint Stack. This allows you to see what’s included and know exactly what you are paying for:

```sh
.
├── AUTHORS.md
├── LICENSE.md
├── Makefile
├── README.md
├── eslint.config.js
├── package.json
├── prettier.config.js
├── src
│   ├── configs
│   │   ├── browser.js
│   │   ├── browser_typescript.js
│   │   ├── browser_typescript_react.js
│   │   ├── node.js
│   │   └── node_typescript.js
│   ├── index.js
│   └── utils
│       ├── configs.js
│       └── ignores.js
└── templates
    ├── browser.config.js
    ├── browser_typescript.config.js
    ├── browser_typescript_react.config.js
    ├── node.config.js
    └── node_typescript.config.js

4 directories, 20 files
```
