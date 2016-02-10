angular.module('scopeApp')
    .directive('registerForm', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/registerForm.html'
        };
    });