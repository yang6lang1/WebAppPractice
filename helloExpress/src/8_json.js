var express = require('express'); 
var app = express();

var fs = require('fs');

app.get('/books', function(request, response) {
	fs.readFile(process.argv[3], function(error, data) {
		if (error) {
			return response.sendStatus(500);
		}
		try {
			var books = JSON.parse(data);
			response.json(books);
		} catch (e) {
			response.sendStatus(500);
		}
	});
});

app.listen(process.argv[2]);