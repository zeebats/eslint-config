/* eslint-disable unicorn/prefer-module */

const importPlugin = require('./plugins/import');
const importNewlinesPlugin = require('./plugins/import-newlines');

module.exports = {
    rules: {
        ...importNewlinesPlugin,
        ...importPlugin,
    },
};
