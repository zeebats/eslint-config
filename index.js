/* eslint-disable unicorn/prefer-module */

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:unicorn/recommended',
        './rules/errors',
        './rules/es6',
        './rules/practices',
        './rules/style',
        './rules/variables',
    ],
    ignorePatterns: [
        '!.*.js',
        '!.*.mjs',
        '**/package-lock.json',
        '**/package.json',
        '/.nuxt/**',
        '/dist/**',
        '/static/sw.*',
    ],
    overrides: [
        {
            files: ['**/*.js'],
            parser: '@babel/eslint-parser',
        },
        {
            extends: [
                'plugin:jsonc/recommended-with-json',
                './rules/json',
            ],
            files: ['**/*.json'],
            parser: 'jsonc-eslint-parser',
        },
    ],
    parserOptions: {
        ecmaVersion: 2021,
        requireConfigFile: false,
        sourceType: 'module',
    },
    plugins: [
        'sort-destructure-keys',
        'unicorn',
    ],
};
