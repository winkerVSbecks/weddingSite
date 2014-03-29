'use strict';

angular.module('weddingSiteApp')
  .controller('AddressesCtrl', ['$scope', '$firebase', '$location', '$firebaseSimpleLogin', '$rootScope',
    function($scope, $firebase, $location, $firebaseSimpleLogin, $rootScope) {

      // LINK TO FIREBASE
      var ref = new Firebase('https://vachharjacobson.firebaseio.com/addresses');
      $scope.isLoggedIn = false;


      // LOGIN OBJECT
      $scope.loginObj = $firebaseSimpleLogin(ref);


      // Check for Login
      $scope.$watch('loginObj.user', function() {

        if ($scope.isAdmin($scope.loginObj.user)) {
          $scope.addresses = $firebase(ref);
          $scope.isLoggedIn = true;
        }

      });


      // Is the user admin
      $scope.isAdmin = function(user) {

        return user && user.id === '2' && user.email === 'varunvachhar@gmail.com' && user.provider === 'password' && user.uid === 'simplelogin:2';
      };


      // LOGOUT
      $scope.logout = function() {
        $scope.loginObj.$logout();
      };

      // Redirect
      $rootScope.$on("$firebaseSimpleLogin:logout", function(e, user) {
        $location.path('/login');
      });

    }
  ]);
