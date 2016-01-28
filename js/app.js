var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/search.html',
            controller: 'searchController'
        })
})

app.controller('searchController', function($scope) {
    $scope.test = "This is a test";
})

app.controller('testController', function($scope) {
    $scope.test = "This is a super test";
})
