var child_process = require('child_process'); //module that can spawn a child process to do work
console.log(1)

//It takes in a command to run, which is 'node', and command parameters
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio: 'inherit' //This is to let child process to share same console
});

console.log(2);