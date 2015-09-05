'use strict';

/**
 * @ngdoc function
 * @name chessRankingPortal.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chessRankingPortal
 */
angular.module('chessRankingPortal')
  .controller('MainCtrl', function ($scope, PolandFactory) {

    $scope.userList = PolandFactory.getUserList();


  });
