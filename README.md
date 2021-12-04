# @zeebats/eslint-config

<p align="center">
    <img src="https://img.shields.io/badge/release-1.0.x-orange?style=for-the-badge" alt="Release">
    <img src="https://img.shields.io/badge/eslint-%5E8.x-8080F2?style=for-the-badge" alt="ESLint">
    <a href="https://www.npmjs.com/package/@zeebats/eslint-config"><img src="https://img.shields.io/npm/v/@zeebats/eslint-config.svg?style=for-the-badge" alt="NPM version"></a>
</p>

This is a shareable config for [ESLint](https://eslint.org). All the rules and configurations are already set. Rules can be overridden if needed.

- [@zeebats/eslint-config](#zeebatseslint-config)
  - [:package: Installing](#package-installing)
    - [Vue.js projects](#vuejs-projects)
    - [TypeScript projects](#typescript-projects)
    - [Vue.js, TypeScript and regular JavaScript together](#vuejs-typescript-and-regular-javascript-together)
  - [:rocket: CLI usage](#rocket-cli-usage)
  - [:pencil2: Editor / IDE integration](#pencil2-editor--ide-integration)
    - [Visual Studio Code](#visual-studio-code)
      - [Autofix](#autofix)
      - [Additional Extensions](#additional-extensions)

## :package: Installing

Include the config into your project:

```shell
npm install @zeebats/eslint-config --save-dev --save-exact
```

Then install the dependencies that the config needs:

```shell
npx install-peerdeps --dev --extra-args="-E" @zeebats/eslint-config
```

In your project, create an `.eslintrc.json` file with the following contents:

```json
{
  "extends": ["@zeebats"]
}
```

---

### Vue.js projects

To use this config with a Vue.js project also install the following packages:

```shell
npm install eslint-plugin-vue eslint-plugin-vuejs-accessibility --save-dev --save-exact
```

And set the following extend in `.eslintrc.json`:

```json
{
  "extends": ["@zeebats/eslint-config/vue"]
}
```

---

### TypeScript projects

To use this config with a TypeScript project also install the following packages

```shell
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev --save-exact
```

And set the following extend in `.eslintrc.json`:

```json
{
  "extends": ["@zeebats/eslint-config/typescript"]
}
```

---

### Vue.js, TypeScript and regular JavaScript together

To use this config with a Vue.js, TypeScript and regular JavaScript project also install the following packages

```shell
npm install eslint-plugin-vue eslint-plugin-vuejs-accessibility @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev --save-exact
```

And set the following extend in `.eslintrc.json`:

```json
{
  "extends": [
    "@zeebats/eslint-config/vue",
    "@zeebats/eslint-config/typescript"
  ]
}
```

## :rocket: CLI usage

To use ESLint in the command-line, add the following scripts to your projects `package.json`:

```json
"scripts": {
  "eslint": "eslint 'path/to/your/assets/**/*.js'",
  "eslint:fix": "npm run eslint -- --fix"
}
```

To also check Vue.js files:

```json
"scripts": {
  "eslint": "eslint 'path/to/your/assets/**/*.{js,vue}'",
  "eslint:fix": "npm run eslint -- --fix"
}
```

Or TypeScript files:

```json
"scripts": {
  "eslint": "eslint 'path/to/your/assets/**/*.{js,ts,tsx}'",
  "eslint:fix": "npm run eslint -- --fix"
}
```

You can run the commands with:

```shell
npm run eslint
npm run eslint:fix
```

## :pencil2: Editor / IDE integration

For ESLint to work, you need to set up your editor / IDE.

### Visual Studio Code

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
2. Get linting :rocket:

#### Autofix

If you want Visual Studio Code to autofix your code on save, add this snippet to your `settings.json` file:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#### Additional Extensions
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to get inline error messages

> :warning: If you have the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension enabled, make sure to **disable** the extension for your project's workspace. This is because Prettier's rules will conflict with ours.
