(function(angular) {
  'use strict';
  
  function Marvel($resource) {
    return $resource('http://gateway.marvel.com/v1/public', {}, {
      getCharacters: {
        method: 'GET',
        isArray: false,
        url: 'http://gateway.marvel.com/v1/public/characters'
      }
    });
  }

  Marvel.$inject = ['$resource'];

  angular
    .module('testApp')
    .factory('Marvel', Marvel);
}(angular));
