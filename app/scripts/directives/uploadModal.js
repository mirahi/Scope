'use strict';

angular.module('scopeApp')
    .directive('uploadModal', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/upload-modal.html'
        };
    });