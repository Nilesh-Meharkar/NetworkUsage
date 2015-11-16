'use strict';

/**
 * @ngdoc function
 * @name networkUsesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the networkUsesApp
 */
angular.module('networkUsesApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    // Graph Chart Data
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B', 'Series C'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90],
      [35, 59, 82, 31, 56, 25, 40]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };






  }]);
