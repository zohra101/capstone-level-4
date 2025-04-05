import { Configuration } from "webpack";

export default {
	//MODULES ARE CODE/FILES THAT ARE IMPORTED
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)/, //COMPILE JAVASCRIPT AND TYPESCRIPT FILES
				exclude: /\.(scss|css|jpg|png|mp4|jpeg|otf|ttf|json)/, //DON'T COMPILE STYLE MODULES, IMAGES, FONTS, OR JSON
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE NODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
			},
			{
				test: /\.(jpg|png|jpeg|mp4)/, //COMPLILE THESE FILE TYPES
				type: "asset/resource", //HANDLE ASSETS AND RESOURCES SEPARATELY FROM BABEL AND STYLES
			},
		],
	},
	//watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL AND RETURN TO CLI. Not needed for webpack dev server.
	//watchOptions: { aggregateTimeout: 3000 }, //GIVES WEBPACK MORE TIME TO COMPILE & PREVENTS BUILD ERRORS. Not needed for webpack dev server.
	// mode: "production", // Disables the debugger. Compresses the code so file size is smaller.
	mode: "development", //ENABLES THE DEBUGGER
	devtool: "source-map", //Allows the debugger to show us the original code instead of the compress
	//Webpack does not process .jsx files by default
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"], //CONFIGURES HOW WEBPACK RESOLVES MODULE PATHS WHEN IMPORTING
	},
	devServer: {
		historyApiFallback: true, //Provides support for SPAs by loading index.html on 404 errors
		open: true, //Automatically opens a browser tab when starting Webpack Dev Server
	},
} as Configuration;
