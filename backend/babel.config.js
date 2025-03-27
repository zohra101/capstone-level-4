export default {
	presets: [
		"@babel/preset-env", //Converts new export/import to old that is compatible with Jest
		"@babel/preset-typescript", //Removes extra datatypes that TypeScript handles and leaves only JavaScript
	],
};
