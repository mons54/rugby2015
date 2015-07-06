(function () {
    
    'use strict';

    /* App Module */
    
    var app = angular.module('app', [
        'ngRoute',
        'controllers',
        'directives',
        'services'
    ]);
    
    app.config(function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainCtrl'
        }).
        when('/matchs', {
            templateUrl: 'partials/matchs.html',
            controller: 'matchsCtrl'
        }).
        when('/teams', {
            templateUrl: 'partials/teams.html',
            controller: 'teamsCtrl'
        }).
        when('/team/:id', {
            templateUrl: 'partials/team.html',
            controller: 'teamCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    });
})();
