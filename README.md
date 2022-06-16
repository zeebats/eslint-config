# @zeebats/eslint-config

<p align="center">
    <img src="https://img.shields.io/badge/eslint-%5E8-brightgreen" alt="ESLint">
    <a href="https://www.npmjs.com/package/@zeebats/eslint-config"><img src="https://img.shields.io/npm/v/@zeebats/eslint-config.svg" alt="NPM version"></a>
</p>

This is a shareable config for [ESLint](https://eslint.org). All the rules and configurations are already set. Rules can be overridden if needed.

- [Installing](#package-installing)
    - [Vue.js projects](#vuejs-projects)
    - [TypeScript projects](#typescript-projects)
    - [Vue.js and TypeScript together](#vuejs-and-typescript-together)
- [CLI usage](#rocket-cli-usage)
- [Editor / IDE integration](#pencil2-editor--ide-integration)
    - [Visual Studio Code](#visual-studio-code)
        - [Autofix](#autofix)
        - [JSON linting](#json-linting)
        - [Additional Extensions](#additional-extensions)

## :package: Installing

Include the config into your project:

```shell
npm install @zeebats/eslint-config --save-dev --save-exact
```

In your project, create an `.eslintrc.json` file with the following contents:

```json
{
  "extends": ["@zeebats"]
}
```

---

### Vue.js projects

To use this config with a Vue.js project, set the following extend in `.eslintrc.json`:

```json
{
  "extends": ["@zeebats/eslint-config/vue"]
}
```

---

### TypeScript projects

To use this config with a TypeScript project, set the following extend in `.eslintrc.json`:

```json
{
  "extends": ["@zeebats/eslint-config/typescript"]
}
```

---

### Vue.js and TypeScript together

To use this config with a Vue.js and TypeScript, set the following extend in `.eslintrc.json`:

```json
{
  "extends": [
    "@zeebats/eslint-config/vue",
    "@zeebats/eslint-config/typescript"
  ]
}
```

> :warning: The order is important here, the TypeScript config needs to be last

### Vue 3

Lastly, Vue 3 is the new stable version of Vue since some time. This config supports Vue 3 linting by modifying the `"extends"` like so:

```diff
{
  "extends": [
-   "@zeebats/eslint-config/vue",
+   "@zeebats/eslint-config/vue3",
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

#### JSON linting

If you want Visual Studio Code to lint JSON files with ESLint, add this snippet to your `settings.json` file:

```json
{
    "eslint.validate": ["json", "jsonc", "json5"],
}
```

#### Additional Extensions
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to get inline error messages

> :warning: If you have the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension enabled, make sure to **disable** the extension for your project's workspace. This is because Prettier's rules will conflict with ours.
