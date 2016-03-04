
angular.module('scopeApp')
    .controller('UserFilesController', function ($scope, $sce, AjaxFactory, MediaService) {
        console.log(MediaService.userData);

        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };

        var user = MediaService.userData;

        var request = AjaxFactory.fileByUser(user.userId);

        request.then(function (response) {
            console.log(response);
            $scope.files = response.data;
        }, function (error) {
            console.log(error.data);
        });
    });