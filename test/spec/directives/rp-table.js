'use strict';

describe('Directive: rpTable', function () {

  // load the directive's module
  beforeEach(module('gridsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rp-table></rp-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rpTable directive');
  }));
});
