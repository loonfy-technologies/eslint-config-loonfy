module.exports = {
	rules: {
		"accessor-pairs": "error",
		"array-bracket-newline": "off",
		"array-callback-return": "error",
		"array-element-newline": "off",
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"arrow-spacing": [
			"error",
			{
				after: true,
				before: true
			}
		],
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"stroustrup"
		],
		"callback-return": "off",
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"comma-dangle": "off",
		"comma-spacing": "off",
		"comma-style": [
			"error",
			"last"
		],
		complexity: ["error", 30],
		"computed-property-spacing": "off",
		"consistent-return": "off",
		"consistent-this": "error",
		curly: "off",
		"default-case": "off",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": [
			"error",
			{
				allowKeywords: true
			}
		],
		"eol-last": "error",
		eqeqeq: "off",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		"func-style": "off",
		"function-call-argument-newline": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": "error",
		"global-require": "off",
		"guard-for-in": "off",
		"handle-callback-err": "off",
		"id-blacklist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1
			}
		],
		"indent-legacy": "off",
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "off",
		"keyword-spacing": [
			"error",
			{
				overrides: {
					if: { after: false },
					for: { after: false },
					while: { after: false },
					else: { after: false },
					try: { after: false },
					catch: { after: false },
					switch: { after: false }
				}
			}
		],
		"line-comment-position": "off",
		"linebreak-style": ["error", "windows"],
		"lines-around-comment": "error",
		"lines-around-directive": "error",
		"lines-between-class-members": "off",
		"max-classes-per-file": "off",
		"max-depth": "error",
		"max-len": [
			"error",
			{
				code: 120,
				tabWidth: 4,
				ignoreRegExpLiterals: true,
				ignoreUrls: true
			}
		],
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"multiline-comment-style": "off",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-await-in-loop": "off",
		"no-bitwise": "error",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "off",
		"no-console": "off",
		"no-continue": "off",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": [
			"error",
			{
				allowElseIf: true
			}
		],
		"no-empty-function": [
			"error",
			{
				allow: ["constructors", "arrowFunctions"]
			}
		],
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "error",
		"no-floating-decimal": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off",
		"no-mixed-s": "off",
		"no-mixed-requires": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-native-reassign": "error",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "off",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-path-concat": "error",
		"no-process-env": "off",
		"no-proto": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "off",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-spaced-func": "error",
		"no-sync": "off",
		"no-tabs": [
			"error",
			{
				allowIndentationTabs: true
			}
		],
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "none",
				ignoreRestSiblings: false
			}
		],
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-use-before-define": "off",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "off",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"arrow-body-style": "off",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": ["error", "after"],
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "off",
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-reflect": "off",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": "off",
		quotes: "off",
		"require-await": "off",
		"require-jsdoc": "off",
		"require-unicode-regexp": "off",
		"rest-spread-spacing": ["error", "never"],
		semi: "off",
		"semi-spacing": "error",
		"semi-style": ["error", "last"],
		"sort-imports": "off",
		"sort-keys": "off",
		"space-before-blocks": ["error", "never"],
		"space-before-function-paren": ["error", {
			anonymous: "never",
			named: "never",
			asyncArrow: "always"
		}],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "off",
		"space-unary-ops": "error",
		strict: ["error", "never"],
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": ["error", "never"],
		"template-tag-spacing": "error",
		"unicode-bom": ["error", "never"],
		"vars-on-top": "error",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		yoda: ["error", "never"],
		"no-case-declarations": "off"
	}
};
