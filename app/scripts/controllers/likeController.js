"use strict";

angular.module('scopeApp')
    .controller('LikeController', function ($scope, $localStorage, AjaxFactory, $stateParams) {
        $scope.liked = false;

    
        AjaxFactory.getLikesByUser($localStorage.userId)
            .then(function (success) {
                var likedItems = success.data;
                for (var item in likedItems) {
                    console.log("liked: " + likedItems[item].fileId);
                    console.log($stateParams.fileId);
                    if ($stateParams.fileId == likedItems[item].fileId) {
                        $scope.liked = true;
                        console.log($scope.liked);
                    }
                }
            }, function (error) {
                console.log(error.data);
            });
    });