angular.module('scopeApp')
    .controller("LocalStorageController", function ($scope, $localStorage) {

    $scope.save = function () {
        $localStorage.message = "Hello World";
    }

    $scope.load = function () {
        $scope.data = $localStorage.message;
    }

});