'use strict';

describe('Service: Thingstodo', function () {

  // load the service's module
  beforeEach(module('WeddingsiteApp'));

  // instantiate service
  var Thingstodo;
  beforeEach(inject(function (_Thingstodo_) {
    Thingstodo = _Thingstodo_;
  }));

  it('should do something', function () {
    expect(!!Thingstodo).toBe(true);
  });

});
