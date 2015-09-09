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


    var cfg = {
      pieceTheme: 'lib/chessboardjs/img/chesspieces/wikipedia/{piece}.png',
      position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'  ,
      draggable: true
    };


    var board = ChessBoard('board', cfg);


  });
