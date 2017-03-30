var fs = require('fs');
var path = process.argv[2];
var extension = '.' + process.argv[3];

var doneCallback = function(err, files) {
	if (!err) {
		(files || []).forEach(function(file) {
			if (file.endsWith(extension)) {
				console.log(file);
			}
		});
	} else {
		console.error(err);
	}
};

fs.readdir(path, doneCallback);