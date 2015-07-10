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
        when('/matchs', {
            templateUrl: 'partials/matchs.html',
            controller: 'matchsCtrl'
        }).
        when('/teams', {
            templateUrl: 'partials/teams.html',
            controller: 'teamsCtrl'
        }).
        otherwise({
            redirectTo: '/matchs'
        });
    });
})();
