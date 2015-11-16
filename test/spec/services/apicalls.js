'use strict';

describe('Service: apiCalls', function () {

  // load the service's module
  beforeEach(module('networkUsesApp'));

  // instantiate service
  var apiCalls;
  beforeEach(inject(function (_apiCalls_) {
    apiCalls = _apiCalls_;
  }));

  it('should do something', function () {
    expect(!!apiCalls).toBe(true);
  });

});
