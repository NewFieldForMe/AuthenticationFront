'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('RegistrationCtrl', function ($scope, $auth, $log, $location) {
    $scope.handleRegBtnClick = function () {
      $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        $location.path('/home');
      })
      .catch(function(resp){
        $location.path('/home');
      });
    };
    $scope.ToLoginClick = function(){
      $location.path('/login');
    };
  });
