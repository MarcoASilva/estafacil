var app = angular.module('app', ['ui.router','app.controllers']);
//

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })

        .state('insert', {
            url: '/insert',
            templateUrl: ('templates/insert.html'),
            controller: 'insertCtrl'
        });


});