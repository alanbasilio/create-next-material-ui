module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true,
		amd: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		// 'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended', // Make sure this is always the last element in the array.
		// 'plugin:import/errors',
		// 'plugin:import/warnings',
		'plugin:react-hooks/recommended'
		// 'airbnb'
	],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/display-name': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton']
			}
		]
	}
};