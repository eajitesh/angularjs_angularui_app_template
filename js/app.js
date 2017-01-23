angular.module('myApp', ['ui.router', 'controllers']).
config(function($stateProvider) {
  $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      });
});
