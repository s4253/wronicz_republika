'use strict';

/**
 * @ngdoc function
 * @name newWroniczApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newWroniczApp
 */
angular.module('newWroniczApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
