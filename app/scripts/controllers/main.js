'use strict';

angular.module('weddingSiteApp')
  .controller('MainCtrl', ['$scope', '$firebase', '$timeout', '$http', function ($scope, $firebase, $timeout, $http) {

  	// LINK TO FIREBASE
  	var ref = new Firebase('https://vachharjacobson.firebaseio.com');
    $scope.messages = $firebase(ref);
  	
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
  			});

  			// // Send as email too
  			// $scope.emailUrl = 'http://api.postmarkapp.com/email';
  			// $scope.emailHeaders = {
  			// 	'Access-Control-Allow-Origin' : '*',
  			// 	'Accept'											: 'application/json',
  			// 	'Content-Type'								: 'application/json',
  			// 	'X-Postmark-Server-Token' 		: 'c4c3e195-a208-4a7e-894f-9ef8c6fe27e1'
  			// };
  			// $scope.emailData = {
  			// 	'From': 'varun@winkervsbecks.com', 
  			// 	'To': 'varunvachhar@gmail.com', 
  			// 	'Subject': $scope.addressForm.name + 'Address', 
  			// 	'HtmlBody': '<html><body><strong>'+$scope.addressForm.name+'</strong> <br />'+ $scope.addressForm.address +'</body></html>'
  			// };

  			// $http({
  			// 	method: 'POST', 
  			// 	url: $scope.emailUrl, 
  			// 	headers: $scope.emailHeaders
  			// })
		   //    .success(function(data, status) {
		   //      console.log('email sent successfully!');
		   //    })
		   //    .error(function(data, status) {
		   //     console.log(data, status);
		   //  	});

  			$timeout(function () {
  				$scope.addressForm.success = false;	
  			}, 3000);

  		}

  	};

  	// Get Page Height
  	$scope.pageHeight = $(window).height(); 

  }]);