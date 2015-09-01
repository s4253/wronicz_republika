'use strict';

/**
 * @ngdoc function
 * @name newWroniczApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newWroniczApp
 */
angular.module('newWroniczApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
