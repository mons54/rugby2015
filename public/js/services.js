(function () {
    
    'use strict';

    /* Services */
    
    var services = angular.module('services', []);
    
    services.factory('http', ['$q', '$http', function ($q, $http) { 
        
        function httpGet (route) {
            var deferred = $q.defer();
            $http.get(route).
            success(function (res) {
                deferred.resolve(res);
            }).
            error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };
        
        function httpPost (route, data) {
            var deferred = $q.defer();
            $http.post(route, data).
            success(function (res) {
                deferred.resolve(res);
            }).
            error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };

        return {
            getMatchs: function () {
                return httpGet('matchs');
            },
            getTeams: function () {
                return httpGet('teams');
            },
            getTeam: function (id) {
                return httpPost('team', {
                    id: id
                });
            }
        };
    }]);
    
})();
