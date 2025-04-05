export default {
	//MODULES ARE CODE/FILES THAT ARE IMPORTED
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
				test: /\.js/,
				exclude: /\.(scss|css|ttf|otf|png|jpeg|jpg|gif|tiff|json)/, //DON'T COMPILE STYLE MODULES
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE NODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
			},
			{
				test: /\.(png|jpeg|gif|jpg)/, //COMPILE IMAGES
				type: "asset/resource",
			},
		],
	},
	watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL WATCH.
	watchOptions: { aggregateTimeout: 3000 }, //GIVING WEBPACK MORE TIME TO COMPILE PREVENTS BUILD ERRORS
	mode: "development", //SET TO DEVELOPMENT MODE NOT PRODUCTION
	devtool: "source-map", //ENABLES THE DEBUGGER CODE TO MATCH ACTUAL CODE
};

