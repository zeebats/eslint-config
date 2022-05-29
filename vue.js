/* eslint-disable unicorn/prefer-module */

const base = require('.');

module.exports = {
    ...base,
    overrides: [
        ...base.overrides,
        {
            extends: [
                'plugin:vue/recommended',
                'plugin:vuejs-accessibility/recommended',
                './rules/vue',
            ],
            files: ['**/*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: { parser: '@babel/eslint-parser' },
        },
    ],
};
