/* eslint-disable unicorn/prefer-module */

const base = require('.');

module.exports = {
    ...base,
    overrides: [
        ...base.overrides,
        {
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
        },
    ],
};
