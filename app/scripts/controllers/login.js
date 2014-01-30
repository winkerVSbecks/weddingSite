'use strict';

angular.module('weddingSiteApp')
	.controller('LoginCtrl', ['$scope', '$firebase', '$firebaseSimpleLogin', '$location', function ($scope, $firebase, $firebaseSimpleLogin, $location) {
  	
  	// LINK TO FIREBASE
  	var ref = new Firebase('https://vachharjacobson.firebaseio.com');


  	// LOGIN OBJECT
  	$scope.loginObj = $firebaseSimpleLogin(ref);


		// LOGIN
		$scope.login = function () {

			$scope.loginObj.$login('password', {
		
			  email: $scope.email,
			  password: $scope.password
		
			}).then( function (user) {

				if (user && user.id === '1' && user.email === 'varunvachhar@gmail.com')
					$location.path('/addresses');
			
			}, function (error) {
			
			  console.error('Login failed: ', error);

			});

		};

  }]);