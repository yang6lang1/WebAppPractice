var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var path = process.argv[3];

var callback = function(request, response) {
	var rs = fs.createReadStream(path);
	rs.pipe(response);
};

var server = http.createServer(callback);
server.listen(port);