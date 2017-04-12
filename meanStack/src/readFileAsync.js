var fs = require('fs');

var onFileLoaded = function() {
    console.log('got the file');
}
console.log('going to get a file');
var file = fs.readFile('readFileSync.js', onFileLoaded);

console.log('and continues....');