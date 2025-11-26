import postcssDiscardComments from "postcss-discard-comments";
import postcssImport from "postcss-import";

export default {
	plugins: [postcssImport(), postcssDiscardComments()],
};
