'use strict';

/**
 * @ngdoc overview
 * @name networkUsesApp
 * @description
 * # networkUsesApp
 *
 * Main module of the application.
 */
angular
  .module('networkUsesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngGrid',
    'chart.js'
  ])
  .config(function ($routeProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $routeProvider
      .when('/', {
        templateUrl: 'views/usertable.html', //'views/main.html',
        controller: 'UsertableCtrl', //'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/usertable.html',
        controller: 'UsertableCtrl',
        controllerAs: 'about'
      })

      .when('/test', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'test'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
