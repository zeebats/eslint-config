/* eslint-disable unicorn/prefer-module */

const base = require('.');

module.exports = {
    ...base,
    overrides: [
        ...base.overrides,
        {
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
            ],
            files: ['**/*.ts'],
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
