# @zeebats/eslint-config

<p align="center">
    <img src="https://img.shields.io/badge/release-1.2.x-orange?style=for-the-badge" alt="Release">
    <img src="https://img.shields.io/badge/eslint-%5E7.x-8080F2?style=for-the-badge" alt="ESLint">
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
      - [Additional Extensions](#additional-extensions)
    - [PhpStorm](#phpstorm)

## :package: Installing

Include the config into your project:

```shell
npm install @zeebats/eslint-config --save-dev --save-exact
```

Then install the dependencies that the config needs:

```shell
npx install-peerdeps --dev --extra-args="-E" @zeebats/eslint-config
```

In your project, create an `.eslintrc.js` file with the following contents:

```js
module.exports = {
    extends: ['@zeebats'],
};
```

---

### Vue.js projects

To use this config with a Vue.js project also install the following packages:

```shell
npm install eslint-plugin-vue eslint-plugin-vuejs-accessibility --save-dev --save-exact
```

And set the following extend in `.eslintrc.js`:

```js
module.exports = {
    extends: ['@zeebats/eslint-config/vue'],
};
```

---

### TypeScript projects

To use this config with a TypeScript project also install the following packages

```shell
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev --save-exact
```

And set the following extend in `.eslintrc.js`:

```js
module.exports = {
    extends: ['@zeebats/eslint-config/typescript'],
};
```

---

### Vue.js, TypeScript and regular JavaScript together

To use this config with a Vue.js, TypeScript and regular JavaScript project also install the following packages

```shell
npm install eslint-plugin-vue eslint-plugin-vuejs-accessibility @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev --save-exact
```

And set the following extend in `.eslintrc.js`:

```js
module.exports = {
    extends: [
        '@zeebats/eslint-config/vue',
        '@zeebats/eslint-config/typescript',
    ],
};
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
2. Add the following settings via `Code` → `Preferences` → `Settings`
3. Get linting :rocket:

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

---

### PhpStorm

Go to [Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint](jetbrains://PhpStorm/settings?name=Languages+%26+Frameworks--JavaScript--Code+Quality+Tools--ESLint) and set it to `Automatic ESLint configuration`

1. Install the [File Watchers](jetbrains://PhpStorm/settings?name=Plugins) plugin when not installed
2. Add a new watcher in [Preferences | Tools | File Watchers](jetbrains://PhpStorm/settings?name=Tools--File+Watchers) (\<custom\>) with the follow data:

```text
Name: ESLint
File type: Any
Scope: Project files
Program: $ProjectFileDir$/node_modules/.bin/eslint
Arguments: --fix $FilePath$
Output paths to refresh: $FileDir$
- Working directory & Environment variables -
Working directory: $ProjectFileDir$
```

You can also select JavaScript, Vue.js or TypeScript files for `File type`, and copy the watcher for each needed file to only check those files

Or import the following xml file:

```xml
<TaskOptions>
    <TaskOptions>
        <option name="arguments" value="--fix $FilePath$" />
        <option name="checkSyntaxErrors" value="true" />
        <option name="description" />
        <option name="exitCodeBehavior" value="ERROR" />
        <option name="fileExtension" value="*" />
        <option name="immediateSync" value="true" />
        <option name="name" value="ESLint" />
        <option name="output" value="$FileDir$" />
        <option name="outputFilters">
            <array />
        </option>
        <option name="outputFromStdout" value="false" />
        <option name="program" value="$ProjectFileDir$/node_modules/.bin/eslint" />
        <option name="runOnExternalChanges" value="true" />
        <option name="scopeName" value="Project Files" />
        <option name="trackOnlyRoot" value="false" />
        <option name="workingDir" value="$ProjectFileDir$" />
        <envs />
    </TaskOptions>
</TaskOptions>
```
