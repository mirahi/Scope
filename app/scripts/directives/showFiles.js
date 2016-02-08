'use strict';
angular.module('scopeApp')
	.directive('showFiles', function () {
		return {
			replace: true,
			restrict: 'E',
			templateUrl: 'views/showFiles.html'
		};
	});