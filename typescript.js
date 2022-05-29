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
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
            ],
            files: [
                '**/*.ts',
                '**/*.tsx',
            ],
            parser: '@typescript-eslint/parser',
        },
    ],
    settings: {
        'import/resolver': {
            ...base.settings['import/resolver'],
            typescript: { alwaysTryTypes: true },
        },
    },
};
