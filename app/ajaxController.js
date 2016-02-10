'use strict';

angular.module('scopeApp')
	.controller('AjaxCtrl', function ($scope, ajaxService) {
		ajaxService.success(function (data) {
			$scope.files = data;
		});
	});