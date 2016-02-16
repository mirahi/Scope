'use strict';

angular.module('scopeApp')
    .controller('LoginController', function ($scope, $location, AjaxFactory, MediaService) {

        var doLogin = function (response) {
            MediaService.setVariable('userData', response.data);
            $location.path('/myFiles').replace();
        };


        $scope.login = function () {

            var data = {
                username: $scope.uname,
                password: $scope.pwd
            };

            var request = AjaxFactory.login(data);

            request.then(doLogin, MediaService.handleError);
        };

        $scope.register = function () {

            var data = {
                username: $scope.uname,
                password: $scope.pwd,
                email: $scope.email
            };

            var request = AjaxFactory.register(data);

            request.then(doLogin, MediaService.handleError);
        };
    });