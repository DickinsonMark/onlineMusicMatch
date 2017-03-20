(function() {

  'use strict';

  angular
    .module('myApp.components.game', [])
    .controller('gameController', gameController);

  gameController.$inject = ['$scope'];

  function gameController($scope) {
    /*jshint validthis: true */
    const vm = this;
  }

})();
