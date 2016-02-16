angular.module('scopeApp')
    .controller('LoginController', function ($scope, $location, AjaxFactory, MediaService) {

        var doLogin = function (response) {
            MediaService.setVariable('userData', response.data);
            $location.path('/myFiles').replace();
        };


        //Login
        $scope.wrongLogin = false;
        $scope.login = function() {
            var userData = {
                'username': $scope.loginUsername,
                'password': $scope.loginPassword
            };

            ajaxFactory.userLogin(userData)
                .then(function(success) {
                    if (success.data.error == undefined) {
                        $scope.$storage = $localStorage.$default({
                            userId: success.data.userId,
                            username: $scope.loginUsername
                        });
                        $scope.username = $scope.loginUsername;
                        $scope.userId = $scope.loginUsername;
                        $window.location.reload();
                        console.log($scope.$storage);
                    } else {
                        console.log("Wrong login");
                        $scope.wrongLogin = true;
                    }
                }, function(err) {
                    console.log(err.data);
                });
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