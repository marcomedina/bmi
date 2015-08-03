'use strict';

angular.module('bmiApp')
  .controller('CalculateCtrl', function ($scope) {
    var categories = [
      {from: 0, to: 14, label: 'Very severely underweight'},
      {from: 15, to: 16, label: 'Severely underweight'},
      {from: 17, to: 18.5, label: 'Underweight'},
      {from: 18.6, to: 25, label: 'Normal (healthy weight)'},
      {from: 26, to: 30, label: 'Overweight'},
      {from: 31, to: 35, label: 'Obese Class I (Moderately obese)'},
      {from: 36, to: 40, label: 'Obese Class II (Severely obese)'},
      {from: 41, to: Infinity, label: 'Obese Class III (Very severely obese)'},
    ]
    $scope.bmi = null;
    $scope.calcBMI = function() {
      $scope.bmi = $scope.weight / Math.pow($scope.height, 2);
      $scope.category = categories.filter(function(c) {
        return $scope.bmi > c.from && $scope.bmi <= c.to;
      })[0];
    };
  });
