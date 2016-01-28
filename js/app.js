var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/search.html',
        controller: 'searchController'
      })
      $locationProvider.html5Mode(true);
});

app.controller("searchController", function($scope){
  $scope.message = "It worked bitches";
});

app.controller('testController', function($scope) {
    $scope.test = "This is a super test";
})
