'use strict';

angular.module('scopeApp')
    .directive('menuContainer', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/menu-container.html'
        };
    });