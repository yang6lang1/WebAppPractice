var net = require('net');

var port = process.argv[2];

var getTimeString = function(time) {
	return (time < 10 ? '0' : '') + time;
};

var listener = function(socket) {
	// Socket handling logic
	var dateStr = "";
	var date = new Date();
	dateStr += date.getFullYear();
	dateStr += "-";
	dateStr += getTimeString(date.getMonth() + 1);
	dateStr += "-";
	dateStr += getTimeString(date.getDate());
	dateStr += " ";
	dateStr += getTimeString(date.getHours());
	dateStr += ":";
	dateStr += getTimeString(date.getMinutes());
	dateStr += "\n";

	socket.end(dateStr);
};

var server = net.createServer(listener);

server.listen(port);