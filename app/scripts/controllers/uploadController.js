angular.module('scopeApp')
    .controller('UploadController', function ($scope, AjaxFactory) {
        console.log("asdpasd");
        $scope.setMediaFile = function (element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = $scope.mimeType.substr(0, 5);
             console.log("asdpasd666   " + $scope.type);
        };

        $scope.postFile = function () {
            var formdata = new FormData($('#upload-form')[0]);
            formdata.append('user', 6);
            formdata.append('type', $scope.type);
            formdata.append('mime-type', $scope.mimeType);
            var response = AjaxFactory.uploadFile(formdata);
            response.then(function (success) {
                console.log(success.data);
            }, function (err) {
                console.log(err.data);
            });
        };

    });