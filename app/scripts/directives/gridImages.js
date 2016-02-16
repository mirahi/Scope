'use strict';

angular.module('scopeApp')
    .directive('gridImages', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/grid-images.html'
        }
    });