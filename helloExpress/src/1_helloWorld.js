var port = process.argv[2];

var express = require('express');
var app = express();
app.get('/home', function(request, response) {
	response.end('Hello World!');
});

app.listen(port);