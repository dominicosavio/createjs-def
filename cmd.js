if (process.argv.length < 4) {
	console.log("createjs-format <format> <file>");
	process.exit();
}
var format = process.argv[2];
var fileName = process.argv[3];


var fs = require("fs");
fs.readFile(fileName, "utf8", function(err, data) {

	if (err) {
		console.log(err);
		return;
	}

	var jsp = require("./lib/parse-js");
	var ast = jsp.parse(data);

	var builder = require("./lib/model");
	var model = builder.parse(ast[1]);
	//console.log(model);

	var formatter = require("./lib/formatter");
	var out = formatter[format](model);
	console.log(out);

});
