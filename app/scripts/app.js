'use strict';

angular.module('weddingSiteApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'firebase'
])
  .config(function ($routeProvider, $httpProvider, $locationProvider) {
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/accommodations', {
        templateUrl: 'views/accommodation.html',
        controller: 'MainCtrl'
      })
      .when('/fun', {
        templateUrl: 'views/fun.html',
        controller: 'MainCtrl'
      })
      .when('/addresses', {
        templateUrl: 'views/addresses.html',
        controller: 'AddressesCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('ViewCtrl', ['$scope', function ($scope) {
    $scope.pageHeight = $(window).height();
  }]);