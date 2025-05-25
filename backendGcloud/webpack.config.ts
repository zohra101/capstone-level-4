import { Configuration } from "webpack";

export default {
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
				test: /\.(js|ts)/, //COMPILE JAVASCRIPT AND TYPESCRIPT FILES
				exclude: /.(json)/,
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
		],
	},
	mode: "development", //Allows use of debugger
	devtool: "source-map", //Maps the location of the original code in the main.js file
	resolve: {
		extensions: [".js", ".ts"], //Automatically inserts extensions in imports
	},
	target: "node", //Defines the framework that webpack should bundle for: node.js not browse
	externals: ["@xenova/transformers"],
	externalsType: "commonjs-module",
} as Configuration;