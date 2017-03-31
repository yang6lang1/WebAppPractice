var http = require('http');

var url = process.argv[2];

var dataString = "";

var dataCallback = function(data) {
	dataString += data;
};

var errorCallback = function(err) {
	console.error(err);
};

var doneCallback = function() {
	console.log(dataString.length);
	console.log(dataString);
};
http.get(url, function(response) {
	response.setEncoding("utf8");
	response.on("data", dataCallback);
	response.on("error",errorCallback);
	response.on("end", doneCallback);
});