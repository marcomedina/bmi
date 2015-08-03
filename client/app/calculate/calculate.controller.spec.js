'use strict';

describe('Controller: CalculateCtrl', function () {

  // load the controller's module
  beforeEach(module('bmiApp'));

  var CalculateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculateCtrl = $controller('CalculateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
