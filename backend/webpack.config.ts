import { Configuration } from "webpack";
import Zip from "zip-webpack-plugin";

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
	mode: "development",
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".ts"], //Automatically inserts extensions in imports
	},
	target: "node",
	output: {
		filename: "index.js", //Changes the name of the bundle file as equired for AWS Lambda
		library: {
			type: "commonjs", //Prevents tree shaking of unused bundle exports AKA indicatesthat the bundle is a library
		},
	},
	plugins: [new Zip({ include: /^index.js$/ })],
} as Configuration;