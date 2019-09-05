# eslint-config-loonfy
ESLint rules for Loonfy projects

## installation
`npm install --save-dev https://github.com/loonfy-technologies/eslint-config-loonfy.git`

## .eslintrc.js example

```
module.exports = {
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"eslint-config-loonfy"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {

	}
};

```
