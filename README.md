# ⚙️ [Eslint Config](https://github.com/tomchochola/eslint-config) by [Tomáš Chochola](https://github.com/tomchochola)

Elevate your coding with **[@tomchochola/eslint-config](https://github.com/tomchochola/eslint-config)**, the ultimate ESLint library that harnesses the full power of the latest ESLint capabilities, including the revolutionary flat config system. Designed to optimize your setup and enforce coding excellence, it's your gateway to next-level coding practices.

## 🛡️ License & Usage

This library is the exclusive property of [Tomáš Chochola](https://github.com/tomchochola), protected under copyright law. Utilization of this software, in any form, is subject to a valid license agreement, obtainable via one-time payment or subscription at [Tomáš Chochola's GitHub Sponsors page](https://github.com/sponsors/tomchochola).

See [LICENSE.md](LICENSE.md) for details.

## 🚀 Highlights

- **Latest ESLint Features**: Ensures your project is up-to-date with the latest standards.
- **Flat Config System**: Simplifies configuration, making it more accessible and maintainable.
- **Versatile Configurations**: Offers tailored setups for various environments including browser, Node.js, and React projects, with or without TypeScript.
- **Comprehensive Ignoring**: Includes predefined ignore patterns for a cleaner, more efficient setup.
- **Quality Assurance**: Enforces coding excellence and best practices, ensuring your code is top-notch.

## 🎨 Available Configuration Presets

Choose from a variety of preconfigured presets:

- **reactTs**: Ideal for React projects with TypeScript.
- **browser**: Perfect for vanilla JavaScript web projects.
- **browserTs**: Enhanced for TypeScript-based web applications.
- **node**: Optimized for Node.js environments.
- **nodeTs**: Tailored for TypeScript usage in Node.js.
- **configs**: Handles various config and .rc files.
- **ignores**: Configures predefined ignore patterns.

## 🌟 Get Started

### 1️⃣ Acquire a License

Secure your license at [Tomáš Chochola's GitHub Sponsors page](https://github.com/sponsors/tomchochola).

Refer to [LICENSE.md](LICENSE.md) for comprehensive terms.

### 2️⃣ Install the Package

```sh
npm install --save-dev github:tomchochola/eslint-config
```

### 3️⃣ Configure

Initialize your `eslint.config.js`:

```js
import { configs } from '@tomchochola/eslint-config';

// Choose from available presets:
// reactTs
// browser
// browserTs
// node
// nodeTs
// configs
// ignores
export default [...configs.ignores(), ...configs.node(), ...configs.configs()];
```

### 4️⃣ Run ESLint

```sh
# To fix issues
./node_modules/.bin/eslint --fix .

# To check for issues
./node_modules/.bin/eslint .
```

And that's it! You're ready to enjoy the full benefits of **[@tomchochola/eslint-config](@tomchochola/eslint-config)**.

## 🤵 Meet Tomáš Chochola

Behind this library is [Tomáš Chochola](https://github.com/tomchochola), a developer with a zeal for clean, efficient code and seamless workflows. Tomáš's commitment to software excellence is evident in every aspect of this project. Dive into a community that values quality and support future innovations by [sponsoring Tomáš Chochola](https://github.com/sponsors/tomchochola).

- **Email: <chocholatom1997@gmail.com>**
- **GitHub: [https://github.com/tomchochola](https://github.com/tomchochola)**
- **Sponsor & License: [https://github.com/sponsors/tomchochola](https://github.com/sponsors/tomchochola)**

## 🌈 Join the Journey

Ready to revolutionize your ESLint experience? [🌟 Get Started](#🌟-get-started) now and elevate your code. For updates, contributions, or questions, engage with us on GitHub. Let's shape the future of clean coding together!
