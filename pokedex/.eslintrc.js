module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		mocha: true,
		node: true,
	},
	extends: [
		// Enables vue-specific rules
		// https://vuejs.github.io/eslint-plugin-vue/rules/
		'plugin:vue/recommended',
		// Ensures good javascript practices
		// https://github.com/airbnb/javascript
		'@vue/airbnb',
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
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				mocha: true,
			},
		},
	],
};
