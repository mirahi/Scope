'use strict';

angular.module('scopeApp')
    .directive('gridAudio', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/grid-audio.html'
        }
    });