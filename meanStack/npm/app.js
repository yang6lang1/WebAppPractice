var express = require('express');
var path = require('path');

var app = express();
app.set('port', 3000);

// loggin middleware
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes');
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('magic happens on port ' + port);
});