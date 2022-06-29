/* eslint-disable unicorn/prefer-module */

const importPlugin = require('./plugins/import');
const importNewlinesPlugin = require('./plugins/import-newlines');
const sortDestructureKeysPlugin = require('./plugins/sort-destructure-keys');
const unicornPlugin = require('./plugins/unicorn');

module.exports = {
	rules: {
		...importNewlinesPlugin,
		...importPlugin,
		...sortDestructureKeysPlugin,
		...unicornPlugin,
	},
};
