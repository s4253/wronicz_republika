'use strict';

/**
 * @ngdoc overview
 * @name newWroniczApp
 * @description
 * # newWroniczApp
 *
 * Main module of the application.
 */
angular
  .module('newWroniczApp', [
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


      .when('/grandmasters', {
        templateUrl: 'views/grandmasters.html',
        controller: 'AboutCtrl'
      })
      .when('/tournaments', {
        templateUrl: 'views/tournaments.html',
        controller: 'AboutCtrl'
      }).when('/contact', {
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
  });
