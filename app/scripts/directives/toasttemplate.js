'use strict';

angular.module('scopeApp')
	.directive('toasttemplate', function () {
		return {
			replace: true,
			restrict: 'E',
			templateUrl: 'views/toast-template.html'
		}
	});