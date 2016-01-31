var app = angular.module('myApp',['ngRoute']);

var results;

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/results', {
            templateUrl: 'partials/search.html',
            controller: 'searchController'
        }).when('/movie/:id', {
            templateUrl: 'partials/movie.html',
            controller: 'movieController'
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
});

app.controller("searchController", function($scope, $http){
  $scope.message = "It worked bitches";
  $scope.titles = results;
});

app.controller('movieController', function($scope, $http, $routeParams) {
    $http.get('http://www.omdbapi.com/?i=' +  $routeParams.id + '&plot=short&r=json').then(function(data) {
        $scope.movieData = data.data;
        console.log($scope.movieData);
    })
})

app.controller('mainController', function($scope, $http, $location, $route) {
    $scope.searchOMDB = function(search) {
        $route.reload();
        results = null;
        $http.get('http://www.omdbapi.com/?s=' + search.title).then(function(data) {
            results = data.data.Search;
            // console.log(results);
            // $window.location.href = '/#/results';
            console.log('here');
            $location.url('/results');
            // $window.location.href = '/results';

        })
    }
})
