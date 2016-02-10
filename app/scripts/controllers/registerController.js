'use strict';

angular.module('scopeApp')
    .controller('RegisterController', function ($scope, AjaxFactory) {
       

        $scope.register = function () {
            var data ={
                username: $scope.uname,
                password: $scope.pass,
                email: $scope.email
            };
            
            var request = AjaxFactory.register(data);

            request.then(function (response) {
                console.log(response.data);
            }, function (error) {
                console.log(error.data);
            });
        };
    });