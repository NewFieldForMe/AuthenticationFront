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
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          $location.path('/home');
        })
        .catch(function(resp) {
          $location.path('/home');
        });
    };
    $scope.ToRegistrationClick = function(){
      $location.path('/registration');
    };
  });
