// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	quoteProps: "consistent",
	overrides: [
		{
			files: ["*.css", "*.html", "*.md"],
			options: {
				printWidth: 9999,
			},
		},
		{
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
	],
};

export default config;
