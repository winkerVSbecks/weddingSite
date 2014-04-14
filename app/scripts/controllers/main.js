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

        } else if (!$scope.rsvpForm.guestNames || $scope.rsvpForm.guestNames === '') {

          $scope.rsvpForm.errMessage = 'Guest names are required.';
          $scope.rsvpForm.error = true;

        } else {
          $scope.rsvpForm.error = false;
          $scope.rsvpForm.errMessage = '';
          $scope.rsvpForm.success = true;

          // Save to firebase
          $scope.rsvp.$add({
            name: $scope.rsvpForm.name,
            guestCount: $scope.rsvpForm.guestCount,
            guestNames: $scope.rsvpForm.guestNames,
            guestAllergies: $scope.rsvpForm.guestAllergies,
            note: $scope.rsvpForm.note
          }).then(function(data) {
            // Reset Form
            $scope.rsvpForm.name = '';
            $scope.rsvpForm.guestCount = '';
            $scope.rsvpForm.guestNames = '';
            scope.rsvpForm.guestAllergies = '';
            $scope.rsvpForm.note = '';
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


      // -----------------------------
      // Songs
      // -----------------------------
      var songsRef = new Firebase('https://vachharjacobson.firebaseio.com/songs');
      $scope.songs = $firebase(songsRef);
      $scope.songsForm = {
        error: false,
        success: false
      };
      // Submit the song
      $scope.submitSong = function() {

        $scope.songsForm.success = false;

        if (!$scope.songsForm.title || $scope.songsForm.title === '') {

          $scope.songsForm.errMessage = 'Title is required.';
          $scope.songsForm.error = true;

        } else if (!$scope.songsForm.band || $scope.songsForm.band === '') {

          $scope.songsForm.errMessage = 'Artist/band name is required.';
          $scope.songsForm.error = true;

        } else {
          $scope.songsForm.error = false;
          $scope.songsForm.errMessage = '';
          $scope.songsForm.success = true;

          // Save to firebase
          $scope.songs.$add({
            title: $scope.songsForm.title,
            band: $scope.songsForm.band,
            note: $scope.songsForm.note,
          }).then(function(data) {
            // Reset Form
            $scope.songsForm.title = '';
            $scope.songsForm.band = '';
            $scope.songsForm.note = '';
          });

          $timeout(function() {
            $scope.songsForm.success = false;
            $scope.songsForm.error = '';
          }, 3000);
        }
      };

    }
  ]);
