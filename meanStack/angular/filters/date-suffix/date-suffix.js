angular.module('myApp').filter('dateSuffix', dateSuffix);

function dateSuffix($filter) {
    //$filter allows you to use some of the basic filters in angularJS
    var suffixes = ['th', 'st', 'nd', 'rd'];

    return function(string, arg1, arg2) {
        if (string) {
            var dtFilter = $filter('date')(string, 'dd MMMM yyyy @ H:m:s');
            var day = parseInt(dtFilter.substr(0, 2));
            var relevantDigits = (day < 30) ? day % 20 : day % 30;
            var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
            dtFilter = dtFilter.substring(2);
            return day + suffix + dtFilter;
        }
    };
}