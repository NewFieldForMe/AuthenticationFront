'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('LoginCtrl', function ($scope, $auth, $log, $location) {
    $scope.handleRegBtnClick = function () {
      $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        $location.path('/home');
      })
      .catch(function(resp){
        $location.path('/home');
      });
    };
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
