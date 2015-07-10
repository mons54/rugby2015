(function () {
    
    'use strict';

    /* Services */
    
    var services = angular.module('services', []);
    
    services.factory('http', ['$q', '$http', function ($q, $http) {

        var teams = [
            {},
            { position: 1, name: "Namibie", points: 57.74 },
            { position: 2, name: "Uruguay", points: 62.11 },
            { position: 3, name: "Roumanie", points: 66.73 },
            { position: 4, name: "Canada", points: 66.83 },
            { position: 5, name: "USA", points: 67.61 },
            { position: 6, name: "Italie", points: 71.85 },
            { position: 7, name: "Georgie", points: 72.16 },
            { position: 8, name: "Tonga", points: 74.12 },
            { position: 9, name: "Japon", points: 73.70 },
            { position: 10, name: "Fidji", points: 74.57 },
            { position: 11, name: "Ecosse", points: 74.79 },
            { position: 12, name: "Samoa", points: 75.39 },
            { position: 13, name: "Argentine", points: 78.23 },
            { position: 14, name: "France", points: 79.74 },
            { position: 15, name: "Australie", points: 82.95 },
            { position: 16, name: "Galles", points: 84.07 },
            { position: 17, name: "Angleterre", points: 85.4 },
            { position: 18, name: "Ireland", points: 85.76 },
            { position: 19, name: "Afrique du sud", points: 88.23 },
            { position: 20, name: "Nouvelle-zelande", points: 93.7 }
        ];

        var matchs = {
            0: [
                { date: '2015-09-18 21:00', team1: 18, team2: 9 },
                { date: '2015-09-20 15:30', team1: 15, team2: 2 },
                { date: '2015-09-23 17:45', team1: 16, team2: 9 },
                { date: '2015-09-26 21:00', team1: 18, team2: 15 },
                { date: '2015-09-27 13:00', team1: 16, team2: 2 },
                { date: '2015-10-01 17:45', team1: 15, team2: 9 },
                { date: '2015-10-03 21:00', team1: 18, team2: 16 },
                { date: '2015-10-06 21:00', team1: 9, team2: 2 },
                { date: '2015-10-10 17:45', team1: 16, team2: 15 },
                { date: '2015-10-10 21:00', team1: 18, team2: 2 },
            ],
            1: [
                { date: '2015-09-19 17:45', team1: 19, team2: 10 },
                { date: '2015-09-20 13:00', team1: 11, team2: 4 },
                { date: '2015-09-23 15:30', team1: 12, team2: 10 },
                { date: '2015-09-26 17:45', team1: 19, team2: 11 },
                { date: '2015-09-27 15:30', team1: 12, team2: 4 },
                { date: '2015-10-03 15:30', team1: 11, team2: 10 },
                { date: '2015-10-03 17:45', team1: 19, team2: 12 },
                { date: '2015-10-07 17:45', team1: 19, team2: 4 },
                { date: '2015-10-10 15:30', team1: 11, team2: 12 },
                { date: '2015-10-11 21:00', team1: 4, team2: 10 },
            ],
            2: [
                { date: '2015-09-19 13:00', team1: 8, team2: 6 },
                { date: '2015-09-20 17:45', team1: 20, team2: 13 },
                { date: '2015-09-24 21:00', team1: 20, team2: 1 },
                { date: '2015-09-25 17:45', team1: 13, team2: 6 },
                { date: '2015-09-29 17:45', team1: 8, team2: 20 },
                { date: '2015-10-02 21:00', team1: 20, team2: 6 },
                { date: '2015-10-04 15:30', team1: 13, team2: 8 },
                { date: '2015-10-07 21:00', team1: 1, team2: 6 },
                { date: '2015-10-09 21:00', team1: 20, team2: 8 },
                { date: '2015-10-11 13:00', team1: 13, team2: 20 },
            ],
            3: [
                { date: '2015-09-19 15:00', team1: 17, team2: 3 },
                { date: '2015-09-19 21:00', team1: 14, team2: 7 },
                { date: '2015-09-23 21:00', team1: 14, team2: 5 },
                { date: '2015-09-26 15:30', team1: 7, team2: 3 },
                { date: '2015-09-27 17:45', team1: 17, team2: 5 },
                { date: '2015-10-01 21:00', team1: 14, team2: 3 },
                { date: '2015-10-04 17:45', team1: 17, team2: 7 },
                { date: '2015-10-06 17:45', team1: 3, team2: 5 },
                { date: '2015-10-11 15:30', team1: 7, team2: 5 },
                { date: '2015-10-11 17:45', team1: 14, team2: 17 },
            ]
        };

        var data = [];
        teams.forEach(function (value) {
            data.push({
                name: value.name,
                value: Math.round(((value.position * value.points) / 10) * 100) / 100
            });
        });
        teams = data;
        
        return {
            getMatchs: function () {
                return matchs;
            },
            getTeams: function () {
                return teams;
            }
        };
    }]);
    
})();
