#!/usr/bin/env node

var fs = require("fs"),
	path = require("path"),
	// ugly = require("uglify-js"),

	result
;

console.log("*** Building Core ***");
console.log("Minifying to dist/fpo.js.");

try {
	// result = ugly.minify(path.join(__dirname,"lib","fpo.src.js"),{
	// 	mangle: {
	// 		keep_fnames: true
	// 	},
	// 	compress: {
	// 		keep_fnames: true
	// 	},
	// 	output: {
	// 		comments: /^!/
	// 	}
	// });


	// NOTE: since uglify doesn't yet support ES6, no minifying happening,
	// just pass through copying. :(
	fs.writeFileSync(
		path.join(__dirname,"dist","fpo.js"),

		fs.readFileSync(path.join(__dirname,"src","fpo.src.js")),

		// result.code + "\n",
		{ encoding: "utf8" }
	);

	console.log("Complete.");
}
catch (err) {
	console.error(err);
	process.exit(1);
}
