angular.module('myApp').filter('reverse', reverse);

function reverse() {
    return function(string) {
        if (string) {
            return string.split('').reverse().join('');
        }
    }
}