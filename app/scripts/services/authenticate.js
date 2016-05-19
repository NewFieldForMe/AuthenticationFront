'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.authenticate
 * @description
 * # authenticate
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('authenticate', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
