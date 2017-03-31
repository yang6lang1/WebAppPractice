var myModule = require('./module.js')
var path = process.argv[2];
var extension = process.argv[3];

var callback = function(err, files) {
	if (err) {
		rturn console.error(err);
	} else {
		files.forEach(function(file) {
			console.log(file);
		});
	}
};
myModule(path, extension, callback);