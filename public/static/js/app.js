'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers',
    'myDirectives'
]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../static/partials/login.html',
                controller: 'LogInController',
                title: 'Home',
            }).
            when('/login', {
                templateUrl: '../static/partials/login.html',
                controller: 'LogInController',
                title: 'Sign In',
            }).
            when('/logout', {
                templateUrl: '../static/partials/login.html',
                // controller: 'LogInController',
                title: 'Sign In',
            }).
            when('/signup', {
                templateUrl: '../static/partials/login.html',
                controller: 'RegisterController',
                title: 'Create an Account',
            }).
            when('/score', {
                templateUrl: '../static/partials/score.html',
                controller: 'LogInController',
                title: 'Game?',
            }).
            // when('/dash', {
            //     templateUrl: '../static/partials/dash.html',
            //     controller: 'ViewController',
            // }).
            otherwise({
               // redirectTo: '/'
               templateUrl: '../static/partials/404.html',
            });
    }]);
myApp.run(function($rootScope, $location, $route) {
        $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
            $rootScope.title = currentRoute.title;
        });
    });