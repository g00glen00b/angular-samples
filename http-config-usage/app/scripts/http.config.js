(function(angular) {
  'use strict';

  function config($httpProvider) {
    var dateRegex = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d+)?([+-][0-2]\d(:?[0-5]\d)?|Z)$/;
    function recurseObject(object) {
      var result = object;
      if (object !== null && object !== undefined) {
        result = angular.copy(object);
        for (var key in result) {
          var property = result[key];
          if (typeof property === 'object') {
            result[key] = recurseObject(property);
          } else if (typeof property === 'string' && dateRegex.test(property)) {
            result[key] = new Date(property);
          }
        }
      }
      return result;
    }

    $httpProvider.defaults.transformResponse = function(data) {
      try {
        var object;
        if (typeof data === 'object') {
          object = data;
        } else {
          object = JSON.parse(data);
        }
        return recurseObject(object);
      } catch(e) {
        return data;
      }
    };
  }

  config.$inject = ['$httpProvider'];

  angular
    .module('testApp')
    .config(config);
}(angular));
