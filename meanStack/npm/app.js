// require('./api/data/dbconnection.js').open();
require('./api/data/db.js');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.set('port', 3000);

// loggin middleware
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

// Use public folder as static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

// extended set to false because in this app we only need string and arrays
// set to true will expose more options
app.use(bodyParser.urlencoded({ extended : false }));

var routes = require('./api/routes');
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('magic happens on port ' + port);
});