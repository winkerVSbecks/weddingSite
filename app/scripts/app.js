'use strict';

angular.module('weddingSiteApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'firebase'
])
  .config(function ($routeProvider, $httpProvider) {
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
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
  });
