require('./instantHello'); //load file using relative path

var goodbye = require('./talk/goodbye'); //load file using module.exports

//it look for a file called talk.js first. if not found it, it looks for index.js
//under a folder named 'talk'
var talk = require('./talk'); 
talk.hello('alex');
talk.intro();

var question = require('./talk/question');
var answer = question.ask('what is the meaing of life?');
console.log(answer);

goodbye();