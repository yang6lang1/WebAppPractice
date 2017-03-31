var http = require('http');

var url = process.argv[2];

var dataCallback = function(data) {
	console.log(data);
};

var errorCallback = function(err) {
	console.error(err);
};

var doneCallback = function() {
	console.log("end");
};
http.get(url, function(response) {
	response.setEncoding("utf8");
	response.on("data", dataCallback);
	response.on("error",errorCallback);
	// response.on("end", doneCallback);
});