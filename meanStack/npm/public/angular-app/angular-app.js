angular.module('meanhotel', ['ngRoute'])
.config(config);

function config($routeProvider) { //Config route
    $routeProvider.when('/', {
        templateUrl : 'angular-app/hotel-list/hotels.html',
        controller : HotelsController,
        controllerAs : 'vm'
    });
}