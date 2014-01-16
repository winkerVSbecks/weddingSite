'use strict';

angular.module('weddingSiteApp')
  .directive('scrollHeader', function () {
    return {
      templateUrl: 'views/hero.html',
      restrict: 'E',
      scope: { 'pageheight' : '=' },
      link: function postLink(scope, element, attrs) {

      	scope.$watch('pageheight', function () {
       		skrollr.init({ forceHeight: false });
      	});
      }
    };
  });
