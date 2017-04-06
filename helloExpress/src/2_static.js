var port = process.argv[2];
var filePath = process.argv[3];

var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(filePath || path.join(__dirname, 'public')));

app.listen(port);