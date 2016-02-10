angular.module('scopeApp')
    .directive('fileForm', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'views/fileForm.html'
        }
    });