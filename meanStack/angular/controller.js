angular.module("myApp").controller("MainController", MainController).controller("FilmController", FilmController);

function MainController(FilmFactory) {
    var vm = this;

    FilmFactory.getAllFilms().then((response) => {
        vm.films = response;
    })

    vm.name = 'Alex Yang';
}

function FilmController($routeParameters, FilmFactory) {
    var vm = this;
    var id = $routeParameters.id;
    FilmFactory.getOneFilm(id).then((response) => {
        vm.film = response;
    });
}