module.exports = {
	root: true,
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
	],
	rules: {
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep'],
			},
		],
		'at-rule-no-unknown': [null],
		indentation: 'tab',
		'function-calc-no-invalid': null,
	},
};
