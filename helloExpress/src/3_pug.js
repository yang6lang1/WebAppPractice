var port = process.argv[2];
var pugPath = process.argv[3];

var express = require('express');
var path = require('path');

var app = express();
app.set("views", pugPath || path.join(__dirname, 'templates'));
app.set("view engine", 'pug');
app.get("/home", function(request, response) {
	response.render("index", {
		date: new Date().toDateString()
	});
});

app.listen(port);