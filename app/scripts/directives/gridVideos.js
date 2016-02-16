'use strict';

angular.module('scopeApp')
    .directive('gridVideos', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/grid-videos.html'
        }
    });