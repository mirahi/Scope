'use strict';

/**
 * @ngdoc function
 * @name scopeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scopeApp
 */
angular.module('scopeApp', ['ngMaterial'])
	.controller('MainCtrl', function () {
		this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	});