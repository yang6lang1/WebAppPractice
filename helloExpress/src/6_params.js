var express = require('express'); 
var app = express();

app.put('/message/:id', function(request, response) {
	var id = request.params.id;
	var hashDate = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	response.send(hashDate);
});

app.listen(process.argv[2]);