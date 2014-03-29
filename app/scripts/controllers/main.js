'use strict';

angular.module('weddingSiteApp')
  .controller('MainCtrl', ['$scope', '$firebase', '$timeout', '$http', '$location', '$anchorScroll', 'thingsToDo', 'foodAndDrink',
    function($scope, $firebase, $timeout, $http, $location, $anchorScroll, thingsToDo, foodAndDrink) {

      $scope.thingsToDo = thingsToDo;
      $scope.foodAndDrink = foodAndDrink;

      // COLLAPSE
      $scope.showAccommodation = false;

      // SCROLL TO SECTIONS
      $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
      };

      // -----------------------------
      // RSVP
      // -----------------------------
      var rsvpRef = new Firebase('https://vachharjacobson.firebaseio.com/rsvp');
      $scope.rsvp = $firebase(rsvpRef);
      $scope.rsvpForm = {
        error: false,
        success: false
      };
      // Submit the rsvp
      $scope.submitRsvp = function() {

        $scope.rsvpForm.success = false;

        if (!$scope.rsvpForm.name || $scope.rsvpForm.name === '') {

          $scope.rsvpForm.errMessage = 'Name is required.';
          $scope.rsvpForm.error = true;

        } else if (!$scope.rsvpForm.guestCount || $scope.rsvpForm.guestCount === '') {

          $scope.rsvpForm.errMessage = 'Guest count is required.';
          $scope.rsvpForm.error = true;

        } else {
          $scope.rsvpForm.error = false;
          $scope.rsvpForm.errMessage = '';
          $scope.rsvpForm.success = true;

          // Save to firebase
          $scope.rsvp.$add({
            name: $scope.rsvpForm.name,
            guestCount: $scope.rsvpForm.guestCount,
            note: $scope.rsvpForm.note
          }).then(function(data) {
            // Reset Form
            $scope.rsvpForm.name = '';
            $scope.rsvpForm.note = '';
            $scope.rsvpForm.guestCount = '';
          });

          $timeout(function() {
            $scope.rsvpForm.success = false;
            $scope.rsvpForm.error = '';
          }, 3000);

        }

      };

      // -----------------------------
      // ADDRESSES
      // -----------------------------
      var addressesRef = new Firebase('https://vachharjacobson.firebaseio.com/addresses');
      $scope.addresses = $firebase(addressesRef);
      $scope.addressForm = {
        error: false,
        success: false
      };
      // Submit the address
      $scope.submitAddress = function() {

        $scope.addressForm.success = false;

        if (!$scope.addressForm.name || $scope.addressForm.name === '') {

          $scope.addressForm.errMessage = 'Name is required.';
          $scope.addressForm.error = true;

        } else if (!$scope.addressForm.address || $scope.addressForm.address === '') {

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
          }).then(function(data) {
            // Reset Form
            $scope.addressForm.name = '';
            $scope.addressForm.address = '';
          });

          $timeout(function() {
            $scope.addressForm.success = false;
            $scope.addressForm.error = '';
          }, 3000);

        }

      };

    }
  ]);
