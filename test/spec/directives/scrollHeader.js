'use strict';

describe('Directive: scrollHeader', function () {

  // load the directive's module
  beforeEach(module('weddingSiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-header></scroll-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollHeader directive');
  }));
});
