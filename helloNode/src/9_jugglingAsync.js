var http = require('http');

var urlOne = process.argv[2];
var dataStringOne = "";
var responseOneComplete = false;

var urlTwo = process.argv[3];
var dataStringTwo = "";
var responseTwoComplete = false;

var urlThree = process.argv[4];
var dataStringThree = "";
var responseThreeComplete = false;

var errorCallback = function(err) {
	console.error(err);
};

var checkAndPrintResults = function() {
	if (responseOneComplete && responseTwoComplete && responseThreeComplete) {
		console.log(dataStringOne);
		console.log(dataStringTwo);
		console.log(dataStringThree);
	}
}

http.get(urlOne, function(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
		dataStringOne += data;
	});
	response.on("error", errorCallback);
	response.on("end", function() {
		responseOneComplete = true;
		checkAndPrintResults();
	});
});

http.get(urlTwo, function(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
		dataStringTwo += data;
	});
	response.on("error", errorCallback);
	response.on("end", function() {
		responseTwoComplete = true;
		checkAndPrintResults();
	});
});

http.get(urlThree, function(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
		dataStringThree += data;
	});
	response.on("error", errorCallback);
	response.on("end", function() {
		responseThreeComplete = true;
		checkAndPrintResults();
	});
});