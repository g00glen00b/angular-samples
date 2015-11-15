(function(angular) {
  'use strict';

  function MainController(Marvel) {
    var vm = this;

    vm.characters = Marvel.getCharacters({
      apikey: '42ccade691a12dce6ebfa211f04f1cd0'
    });
  }

  MainController.$inject = ['Marvel'];

  angular
    .module('testApp')
    .controller('MainController', MainController);
}(angular));
