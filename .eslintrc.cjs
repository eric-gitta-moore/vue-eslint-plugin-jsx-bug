const path = require('path')
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: path.resolve(__dirname, './tsconfig.json'),
		extraFileExtensions: ['.vue'],
		ecmaVersion: 2018,
		sourceType: 'module',
		debugLevel: ['typescript'],
		ecmaFeatures: {
			jsx: true,
		}
	},
});