var http = require('http');
var url = require('url');

var port = process.argv[2];

var parsetime = function(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
};

var unixtime = function(time) {
	return {
		unixtime: time.getTime()
	};
};

var server = http.createServer(function(request, response) {
	var parsedUrl = url.parse(request.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;
	if (urlMetadata.pathname === '/api/parsetime') {
		result = parsetime(time);
	}
	if (urlMetadata.pathname === '/api/unixtime') {
		result = unixtime(time);
	}

	if (result) {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});
		response.write(JSON.stringify(responseObj));
	} else {
		response.writeHead(404);
	}

	response.end();
});

server.listen(port);
