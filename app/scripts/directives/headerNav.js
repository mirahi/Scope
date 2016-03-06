'use strict';

angular.module('scopeApp')
    .directive('headerNav', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/header-nav.html'
        };
    });