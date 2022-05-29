/* eslint-disable unicorn/prefer-module */

const base = require('.');

const extendsList = require('./extends-list');

module.exports = {
    ...base,
    overrides: [
        ...base.overrides,
        {
            extends: [
                ...extendsList,
                'plugin:vue/recommended',
                'plugin:vuejs-accessibility/recommended',
                './rules/plugins/vue',
            ],
            files: ['**/*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: { parser: '@babel/eslint-parser' },
            rules: { 'sort-keys': 'off' },
        },
    ],
};
