/** @type {import('stylelint').Config} */
export default {
	extends: [
		// Order matters: later configs take precedence over (override) earlier ones.
		"stylelint-config-standard",
		"stylelint-config-recess-order",
	],
	plugins: ["stylelint-no-unsupported-browser-features"],
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	rules: {
		/* ----------------------------------------
		Avoid errors
		---------------------------------------- */

		// Descending
		"no-descending-specificity": [
			true,
			{
				severity: "warning",
			},
		],

		// Duplicate
		"font-family-no-duplicate-names": [
			true,
			{
				ignoreFontFamilyNames: ["monospace"], // See https://github.com/search?q=repo%3Agermanfrelo%2Fbase-css-stylesheet+%22monospace%2C+monospace%22&type=code
			},
		],

		// Unknown
		"declaration-property-value-no-unknown": true,
		"media-feature-name-value-no-unknown": true,
		"no-unknown-animations": true,
		"no-unknown-custom-media": true,
		"no-unknown-custom-properties": true,

		/* ----------------------------------------
		Enforce conventions
		---------------------------------------- */

		// Allowed, disallowed & required
		"property-no-vendor-prefix": [
			true,
			{
				ignoreProperties: ["text-size-adjust"], // See https://codepen.io/germanfrelo/pen/JoPJVxd
			},
		],

		// Empty lines
		"declaration-empty-line-before": "never",

		// Notation
		"media-feature-range-notation": null, // TODO: Remove when browser support is ~96% (https://caniuse.com/css-media-range-syntax)

		// Pattern
		"custom-media-pattern": null,
		"custom-property-pattern": null,
		"keyframes-name-pattern": null,
		"selector-class-pattern": null,
		"selector-id-pattern": null,

		// Redundant
		"declaration-block-no-redundant-longhand-properties": null,

		/* ----------------------------------------
		Plugin: stylelint-no-unsupported-browser-features
		---------------------------------------- */

		"plugin/no-unsupported-browser-features": [
			true,
			{
				severity: "warning",
			},
		],
	},
};
