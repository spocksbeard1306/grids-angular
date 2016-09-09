'use strict';

describe('Controller: Grid1Ctrl', function () {

  // load the controller's module
  beforeEach(module('gridsApp'));

  var Grid1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Grid1Ctrl = $controller('Grid1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Grid1Ctrl.awesomeThings.length).toBe(3);
  });
});
