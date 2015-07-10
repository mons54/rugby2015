(function () {
	
	'use strict';

	/* Directives */
	
	var directives = angular.module('directives', []);

	directives.directive('nav', function () {
	    return {
	        templateUrl: 'views/nav.html',
	        restrict: 'E',
	        controller: 'navCtrl'
	    };
	});
	
})();
