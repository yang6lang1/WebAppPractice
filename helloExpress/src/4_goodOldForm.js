var port = process.argv[2];

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', function(request, response) {
	if (!request.body || !request.body.str) {
		return response.sendStatus(400);
	}
	response.send(request.body.str.split('').reverse().join(''));
	response.end();
});

app.listen(port);