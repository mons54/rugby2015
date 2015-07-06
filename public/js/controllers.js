(function () {
    
    'use strict';

    /* Controllers */
    
    var controllers = angular.module('controllers', ['services']);
    
    controllers.controller('appCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.title = "Rugby 2015";
    }]);
    
    controllers.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.nav = [
            {
                name: "Matchs",
                link: '/matchs'
            },
            {
                name: "Teams",
                link: '/teams'
            }
        ];
            
        $scope.navActive = function (link) {
            if ($location.path().substr(1).split('/')[0] == link) {
                return 'active';
            }
        };
    }]);
    
    controllers.controller('mainCtrl', ['$scope', 'http', function ($scope, http) {

        $scope.text = "COUPE DU MONDE DE RUGBY 2015 - 18 SEPTEMBRE AU 31 OCTOBRE - ANGLETERRE";
    }]);

    controllers.controller('matchsCtrl', ['$scope', 'http', function ($scope, http) {

        $scope.group = 0;

        $scope.getGroupName = function (key) {
            return (['Groupe A', 'Groupe B', 'Groupe C', 'Groupe D'])[key];
        };

        $scope.setGroup = function (key) {
            $scope.group = key;
        };

        $scope.getTeam = function (index) {
            return $scope.teams[index].name;
        };

         $scope.getCote = function (index) {
            return $scope.teams[index].value;
        };

        $scope.getCote1 = function (match) {
            return getCote($scope.teams[match.team1], $scope.teams[match.team2]);
        };

        $scope.getCote2 = function (match) {
            return getCote($scope.teams[match.team2], $scope.teams[match.team1]);
        };

        $scope.getPercentage = function (value, total) {
        	return format((value / total) * 100) + '%';
        };

        function getCote(team1, team2) {
            return [
                getPoints(team1, team2, 1),
                getPoints(team1, team2, 0.5),
                getPoints(team1, team2, 0)
            ];
        }

        function getPoints(team1, team2, res) {
            if (!team1 || !team2) {
                return;
            }
            var x = 100,
            	diff = team1.value - team2.value;

            if (diff > x) {
            	diff = x;
            } else if (diff < (x * -1)) {
            	diff = x * -1;
            }
            return format(20 * (res - (1 - (1 / (1 + Math.pow(10, (diff) / x))))));
        }

        function format(value) {
        	return parseFloat(Math.round(value * 100) /100).toFixed(2);
        }

        http.getTeams().
        then(function (res) {
            $scope.teams = res.data;
            return http.getMatchs();
        }).
        then(function (res) {
            $scope.matchs = res.data;
        });
    }]);

    controllers.controller('teamsCtrl', ['$scope', 'http', function ($scope, http) {

        $scope.predicate = 'name';
        
        http.getTeams().
        then(function (res) {
            $scope.teams = res.data;
        });
    }]);

    controllers.controller('teamCtrl', ['$scope', '$routeParams', 'http', function ($scope, $routeParams, http) {
        
        http.getTeam($routeParams.id).
        then(function (res) {
            if (res.error) {
                $scope.error = res.error;
                return;
            }
            $scope.team = res.data;
        }, function (err) {
            $scope.error = "HTTP BAD REQUEST!";
        });
    }]);

})();
