/* eslint-disable unicorn/prefer-module */

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsdoc/recommended',
        'plugin:unicorn/recommended',
        './rules/errors',
        './rules/es6',
        './rules/jsdoc',
        './rules/practices',
        './rules/style',
        './rules/variables',
    ],
    ignorePatterns: [
        '!.*.js',
        '!.*.mjs',
        '/.nuxt/**',
        '/dist/**',
        '/static/sw.*',
    ],
    overrides: [
        {
            files: ['**/*.js'],
            parser: '@babel/eslint-parser',
        },
    ],
    parserOptions: {
        ecmaVersion: 2021,
        requireConfigFile: false,
        sourceType: 'module',
    },
    plugins: [
        'jsdoc',
        'unicorn',
    ],
};
