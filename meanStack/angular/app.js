angular.module("myApp", [ /*dependencies */ 'ngRoute']).config(config);

function config($routeProvider) { //$routeProvider is a built in service
    $routeProvider.when('/', {
        templateUrl: 'templates/main.html', //In order to do this, we need to create an http server
        controller: 'MainController',
        controllerAs: 'vm'
    }).when('/film/:id', {
        templateUrl: 'templates/film.html',
        controller: 'FilmContoller',
        controllerAs: 'vm'
    }).otherwise({
        redirectTo: '/'
    })
}