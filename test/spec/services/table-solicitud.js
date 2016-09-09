'use strict';

describe('Service: tableSolicitud', function () {

  // load the service's module
  beforeEach(module('gridsApp'));

  // instantiate service
  var tableSolicitud;
  beforeEach(inject(function (_tableSolicitud_) {
    tableSolicitud = _tableSolicitud_;
  }));

  it('should do something', function () {
    expect(!!tableSolicitud).toBe(true);
  });

});
