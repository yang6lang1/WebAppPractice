var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
	var fs = require('fs');
	fs.readdir(dir, function(err, files) {
		if (err) {
			callback(err);
		} else {
			var filteredFiles = (files || []).filter(function(file) {
				return path.extname(file) === '.' + extension;
			});
			callback(null, filteredFiles);
		}
	})
};