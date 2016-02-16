'use strict';

angular.module('scopeApp')
    .directive('formRegister', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/form-register.html'
        };
    });