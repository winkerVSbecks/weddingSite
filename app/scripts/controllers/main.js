'use strict';

angular.module('weddingSiteApp')
  .controller('MainCtrl', ['$scope', '$firebase', '$timeout', '$http', '$location', '$anchorScroll', function ($scope, $firebase, $timeout, $http, $location, $anchorScroll) {

    // COLLAPSE
    $scope.showAccommodation = false;

    // SCROLL TO SECTIONS
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

  	// LINK TO FIREBASE
  	var ref = new Firebase('https://vachharjacobson.firebaseio.com');
  	
  	// ADDRESSES
  	$scope.addresses = $firebase(ref);
  	$scope.addressForm = { error : false, success : false };

  	// Submit the address
  	$scope.submitAddress = function () {

  		$scope.addressForm.success = false;

  		if(!$scope.addressForm.name || $scope.addressForm.name === '') {
  			
  			$scope.addressForm.errMessage = 'Name is required.';
  			$scope.addressForm.error = true;
  		
  		} else if(!$scope.addressForm.address || $scope.addressForm.address === '') {

  			$scope.addressForm.errMessage = 'Address is required.';
  			$scope.addressForm.error = true;

  		} else {

  			$scope.addressForm.error = false;
  			$scope.addressForm.errMessage = '';
  			$scope.addressForm.success = true;

  			// Save to firebase
  			$scope.addresses.$add({
  				name: $scope.addressForm.name, 
  				address: $scope.addressForm.address
  			}, function (data) {
          // Reset Form
          $scope.addressForm.name = '';
          $scope.addressForm.address = '';
        });

  			$timeout(function () {
  				$scope.addressForm.success = false;
          $scope.addressForm.error = '';	
  			}, 3000);

  		}

  	}; 

  }]);