angular.module("myApp").controller("MainController", MainController).controller("FilmController", FilmController);

function MainController(FilmFactory) {
    var vm = this;

    FilmFactory.getAllFilms().then((response) => {
        vm.films = response;
    })

    vm.name = 'Alex Yang';

    vm.date1 = '12 February 2016';
    vm.date2 = '11 March 2016';
    vm.date3 = '03 January 2015';
    vm.date4 = '25 April 2014';
}

function FilmController($routeParameters, FilmFactory) {
    var vm = this;
    var id = $routeParameters.id;
    FilmFactory.getOneFilm(id).then((response) => {
        vm.film = response;
    });
}