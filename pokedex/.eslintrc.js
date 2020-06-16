module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		mocha: true,
	},
	extends: [
		// Enables vue-specific rules
		// https://vuejs.github.io/eslint-plugin-vue/rules/
		'plugin:vue/recommended',
		// Ensures good javascript practices
		// https://github.com/airbnb/javascript
		'@vue/airbnb',
		// Disables no-unused-expressions for chai assertions
		// e.g. expect(true).to.be.true
		'plugin:chai-friendly/recommended',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'vue/no-v-html': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/attributes-order': ['error'],
		curly: 'error',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
