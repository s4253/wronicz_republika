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
      position: 'rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR',
      draggable: true,
      dropOffBoard: 'trash'
    };

    var board = ChessBoard('board', cfg);

    $('#setStartBtn').on('click', function() {
      board.position('rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR');
    });

  });
