'use strict';

/**
 * @ngdoc overview
 * @name gridsApp
 * @description
 * # gridsApp
 *
 * Main module of the application.
 */
angular
  .module('gridsApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/grid1', {
        templateUrl: 'views/grid1.html',
        controller: 'Grid1Ctrl',
        controllerAs: 'grid1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
