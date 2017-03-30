var fs = require('fs');
var path = process.argv[2];

var bufferContent;
var doneCallback = function(err, data) {
	if (!err) {
		bufferContent = data.toString(); // if no 'utf8' encoding
		// bufferContent = data;
		var lines = bufferContent.split('\n');
		console.log(lines.length - 1);
	} else {
		console.log("error");
	}
};

fs.readFile(path, doneCallback);
