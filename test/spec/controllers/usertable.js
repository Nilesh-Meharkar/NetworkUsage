'use strict';

describe('Controller: UsertableCtrl', function () {

  // load the controller's module
  beforeEach(module('networkUsesApp'));

  var UsertableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsertableCtrl = $controller('UsertableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsertableCtrl.awesomeThings.length).toBe(3);
  });
});
