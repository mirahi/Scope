angular.module('scopeApp')
    .directive('loginForm', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/loginForm.html'
        };
    });