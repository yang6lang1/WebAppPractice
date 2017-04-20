angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController($http) { //config controller
    var vm = this;
    vm.title = 'MEAN Hotel App';

    $http.get('/api/hotels/?count=10').then(function(response) {
        vm.hotels = response.data;
    });
}