"use strict";

angular.module('scopeApp')
    .controller('LikeController', function ($scope, $localStorage, AjaxFactory, $stateParams) {
        $scope.liked = false;

        $scope.likedItems;
        $scope.userItems;


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

        AjaxFactory.getFilesByUser($localStorage.userId)
            .then(function (success) {
                $scope.userItems = success.data;
                            for (var item in $scope.userItems) {
                    console.log("upped: " + $scope.userItems[item].fileId);
                    console.log($stateParams.fileId);
                            }
            }, function (error) {
                console.log(error.data);
            });
    });