var fs = require('fs');
var path = process.argv[2];
var buffer = fs.readFileSync(path);
var bufferContent = buffer.toString();
var lines = bufferContent.split('\n');
console.log(lines.length - 1);