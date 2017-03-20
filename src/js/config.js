(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(appConfig);

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/components/main/main.view.html'
      });
  }

})();
