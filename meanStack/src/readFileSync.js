var fs = require('fs');

console.log('going to get a file');
var file = fs.readFileSync('readFileSync.js');
console.log('got the file');

console.log('and continues');