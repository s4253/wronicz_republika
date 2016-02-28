'use strict';

/**
 * @ngdoc overview
 * @name chessRankingPortal
 * @description
 * # chessRankingPortal
 *
 * Main module of the application.
 */
angular
  .module('chessRankingPortal', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/world', {
        templateUrl: 'views/world.html',
        controller: 'AboutCtrl'
      }).when('/poland', {
        templateUrl: 'views/poland.html',
        controller: 'AboutCtrl'
      }).when('/maximum', {
        templateUrl: 'views/maximum.html',
        controller: 'AboutCtrl'
      }).when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'AboutCtrl'
      })


      .when('/tournaments', {
        templateUrl: 'views/tournaments.html',
        controller: 'AboutCtrl'
      })
      .when('/allPlayers', {
        templateUrl: 'views/allPlayers.html',
        controller: 'AboutCtrl'
      })

      .when('/grandmasters', {
        templateUrl: 'views/grandmasters.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl'
      })
      .when('/rulebook', {
        templateUrl: 'views/rulebook.html',
        controller: 'AboutCtrl'
      })
      .when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'AboutCtrl'
      }).when('/explanations', {
        templateUrl: 'views/explanations.html',
        controller: 'AboutCtrl'
      }).when('/gamesdb', {
        templateUrl: 'views/gamesdb.html',
        controller: 'AboutCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory('PolandFactory', ['$http', function ($http) {
    var factory = {};


    factory.getUserList = function () {
      var polandBestPlayers = [];

      $http.get('views/poland.html').success(function (data) {

          var polandFile = data.split('\n');

          var found = false;
          var bestPlayers = 0;
          var i = 0;

          while (bestPlayers < 15 && i < 30) {
            var item = polandFile[i++];
            item = item.trim();
            if (item.indexOf('Ranking FIDE') > -1) {
              found = true;
              continue;
            }

            if (found) {
              if(item === ''){
                continue;
              }
              polandBestPlayers.push(item.split(' '));
              ++bestPlayers;
            }
          }
        }
      )
      ;
      return polandBestPlayers;
    };

    return factory;

  }
  ])
;

