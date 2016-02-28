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

    // BEGIN FEN - Change this FEN line to change the position
    var fen = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
    // END FEN


    var cfg = {
      pieceTheme: 'bower_components/chessboard.js/img/chesspieces/wikipedia/{piece}.png',
      position: fen,
      draggable: true,
      dropOffBoard: 'trash'
    };

    var board = new ChessBoard('board', cfg);

    $('#setStartBtn').on('click', function() {
      board.position(fen);
    });

  });
