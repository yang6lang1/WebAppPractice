angular.module('myApp'), factory('FilmFactory', FilmFactory);

function FilmFactory($http) {
    function getAllFilms() {
        return $http.get('http://www.google.com').then(completed).fail(failed);
    }

    function getOneFilm(id) {
        return $http.get('http://www.google.com/' + id).then(completed).fail(failed);
    }
    function completed(response) {
        return response.data;        
    }

    function failed(error) {
        return error.statusText;
    }
    return {
        getAllFilms: getAllFilms,
        getOneFilm: getOneFilm
    };
}