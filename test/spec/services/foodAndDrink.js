'use strict';

describe('Service: Foodanddrink', function () {

  // load the service's module
  beforeEach(module('WeddingsiteApp'));

  // instantiate service
  var Foodanddrink;
  beforeEach(inject(function (_Foodanddrink_) {
    Foodanddrink = _Foodanddrink_;
  }));

  it('should do something', function () {
    expect(!!Foodanddrink).toBe(true);
  });

});
