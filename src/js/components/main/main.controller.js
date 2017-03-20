(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'localStorageService'];

  function mainController($scope, localStorageService) {
    /*jshint validthis: true */
    const vm = this;
    vm.errorsPresent = {
      username: true,
      password: true
    };
    vm.signIn = signInFunc;
    vm.signUp = signUpFunc;

    function signInFunc() {
      console.log('Hit SignIn!!!!');
    }
    function signUpFunc() {
      console.log('Hit SignUp!!!!');
    }
  }

})();
