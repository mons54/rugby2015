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
	
	directives.directive('teamInfos', function () {
	    return {
	        templateUrl: 'views/team-infos.html',
	        restrict: 'A'
	    };
	});
	
	directives.directive('email', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, el, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					if (validator.isEmail(viewValue)) {
						ctrl.$setValidity('email', true);
						return viewValue;
					}
					ctrl.$setValidity('email', false);
					return undefined;
				});
			}
		};
	});
	
})();
