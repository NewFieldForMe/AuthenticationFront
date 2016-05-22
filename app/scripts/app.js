'use strict';

/**
 * @ngdoc overview
 * @name angularJsApp
 * @description
 * # angularJsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth'
  ])
  .config(function($authProvider){
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api/v1',
      emailRegistrationPath:   '/auth'
    });
  })
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
