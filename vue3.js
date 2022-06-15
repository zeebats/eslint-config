/* eslint-disable unicorn/prefer-module */

const base = require('.');

const rulesExtends = require('./rules');

module.exports = {
    ...base,
    overrides: [
        ...base.overrides,
        {
            extends: [
                ...rulesExtends,
                'plugin:vue/vue3-recommended',
                'plugin:vuejs-accessibility/recommended',
                './rules/plugins/vue',
            ],
            files: ['**/*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: {
                    js: '@babel/eslint-parser',
                    ts: '@typescript-eslint/parser',
                },
            },
            rules: { 'sort-keys': 'off' },
        },
    ],
};
