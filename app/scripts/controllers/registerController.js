
angular.module('scopeApp')
    .controller('RegisterController', function ($scope, AjaxFactory, MediaService) {

        $scope.register = function () {
            
            var data = {
                
                username: $scope.uname,
                password: $scope.pwd,
                email: $scope.email
            };

            var request = AjaxFactory.register(data);

            request.then(function (response) {
                MediaService.setVariable('userData', response.data);
                $scope.logged = true;
            }, function (error) {
                console.log(error.data);
            });
        };
    });