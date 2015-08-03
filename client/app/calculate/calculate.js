'use strict';

angular.module('bmiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calculate', {
        url: '/calculate',
        templateUrl: 'app/calculate/calculate.html',
        controller: 'CalculateCtrl',
        sp: {
          authenticate: true
        }
      });
  });
