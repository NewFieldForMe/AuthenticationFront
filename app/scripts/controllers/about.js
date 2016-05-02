'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('AboutCtrl', function ($scope, $auth, $log, $location) {
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
