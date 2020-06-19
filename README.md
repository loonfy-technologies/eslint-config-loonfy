# eslint-config-loonfy
ESLint rules for Loonfy projects

## installation
`npm install --save-dev https://github.com/loonfy-technologies/eslint-config-loonfy.git`

## .eslintrc.js example

```
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint/eslint-plugin'
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint-config-loonfy'
	],
	root: true,
	env: {
		node: true,
		jest: true,
		browser: true
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off"
	}
};

```
