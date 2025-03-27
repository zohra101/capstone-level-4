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
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts"] //Automatically inserts extensions in imports
    },
    target: "node",
} as Configuration;