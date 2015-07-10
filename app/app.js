'use strict';

// Declare app level module which depends on views, and components
angular.module('lulu', [
  'ui.router',
  'lulu.menu'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/menu');
}])
