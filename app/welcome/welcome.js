'use strict';

angular.module('myApp.welcome', ['ngRoute'])

// Create a route for the Welcome screen
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'welcomeCtrl'
  });
}])

.controller('welcomeCtrl', [function() {

}]);