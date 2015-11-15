(function(angular) {
  'use strict';

  function MainController(Marvel) {
    var vm = this;

    vm.characters = Marvel.getCharacters({
      apikey: /** Your API key here */
    });
  }

  MainController.$inject = ['Marvel'];

  angular
    .module('testApp')
    .controller('MainController', MainController);
}(angular));
