var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/homepage', function(req, res) {
    console.log('GET the home page');
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res) {
    console.log('GET the json');
    res.status(200).json({
        jsonData: true
    });
});

app.get('/file', function(req, res) {
    console.log('GET the file');
    res.status(200).sendFile(path.join(__dirname, "app.js"));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('magic happens on port ' + port);
});