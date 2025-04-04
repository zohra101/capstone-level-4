export default {
	presets: [
		"@babel/preset-env", //Converts the new import-export syntax to the old syntax (for Jest)
		"@babel/preset-react", //Converts JSX to browser-compatible JavaScript
		"@babel/preset-typescript", //Removes extra datatypes that TypeScript handles and leaves only JavaScript
	],
};

