"use strict";

angular.module('scopeApp')
    .controller('LikeController', function ($scope, $localStorage, AjaxFactory, $stateParams) {
        $scope.liked = false;
        $scope.likedItems;

    
        AjaxFactory.getLikesByUser($localStorage.userId)
            .then(function (success) {
                $scope.likedItems = success.data;
                for (var item in $scope.likedItems) {
                    console.log("liked: " + $scope.likedItems[item].fileId);
                    console.log($stateParams.fileId);
                    if ($stateParams.fileId == $scope.likedItems[item].fileId) {
                        $scope.liked = true;
                        console.log($scope.liked);
                    }
                }
            }, function (error) {
                console.log(error.data);
            });
    });