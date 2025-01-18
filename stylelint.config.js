/** @type {import('stylelint').Config} */
export default {
	extends: [
		// The order of configs is important: later configs take precedence over earlier ones
		"stylelint-config-standard", // Extends stylelint-config-recommended and turns on additional rules to enforce modern conventions
		"stylelint-config-recess-order", // Sorts CSS properties
	],
	plugins: ["stylelint-no-unsupported-browser-features"], // Disallows features that aren't supported by your target browser audience
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	reportUnscopedDisables: true,
	rules: {
		/* Avoid errors
		---------------------------------------- */
		// Descending
		"no-descending-specificity": [
			true, // Already enabled in stylelint-config-recommended
			{ severity: "warning" }, // Default is 'error', I prefer 'warning'
		],
		// Duplicate
		"font-family-no-duplicate-names": [
			true, // Already enabled in stylelint-config-recommended
			{ ignoreFontFamilyNames: ["monospace"] }, // Don't report the 'font-family: monospace, monospace' declaration
		],
		// Unknown
		"no-unknown-animations": true,
		"no-unknown-custom-media": true,
		"no-unknown-custom-properties": true,

		/* Enforce conventions
		(overrides rules from stylelint-config-standard)
		---------------------------------------- */
		// Allowed, disallowed & required
		"property-no-vendor-prefix": [
			true,
			{ ignoreProperties: ["text-size-adjust"] }, // Don't report '-webkit-text-size-adjust'
		],
		// Empty lines
		"declaration-empty-line-before": "never",
		// Notation
		"media-feature-range-notation": null, // TODO: Remove when 'baseline' is 'widely available' (~96%) (https://caniuse.com/css-media-range-syntax)
		// Pattern
		"custom-media-pattern": null,
		"custom-property-pattern": null,
		"keyframes-name-pattern": null,
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		// Redundant
		"declaration-block-no-redundant-longhand-properties": null,

		/* Plugin: stylelint-no-unsupported-browser-features
		---------------------------------------- */
		"plugin/no-unsupported-browser-features": [
			true,
			{
				severity: "warning",
			},
		],
	},
};
