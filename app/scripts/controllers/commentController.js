"use strict";

angular.module('scopeApp')
    .controller('CommentController', function ($scope, $localStorage, AjaxFactory, $stateParams, $location, $window) {
        $scope.liked = false;
        $scope.likedItems = [];

        $scope.postComment = function () {
            var commentData = {
                'user': $localStorage.userId,
                'comment': $scope.comment
            };

            console.log(commentData, $stateParams.fileId);

            AjaxFactory.postComment(commentData, $stateParams.fileId)
                .then(function (success) {
                    console.log(success.data);
                    $location.url($location.path());
                    $window.location.reload();

                }, function (error) {
                    console.log(error.data);
                });
        };

        AjaxFactory.getItemComments($stateParams.fileId)
            .then(function (success) {
                $scope.itemComments = success.data;
            }, function (error) {
                console.log(error);
            });

        $scope.likeItem = function () {
            if (!$scope.liked) {
                AjaxFactory.likeItem($stateParams.fileId, $localStorage.userId)
                    .then(function (success) {
                        $scope.liked = true;
                        console.log("liking item" + success.data);
                        $location.url($location.path());
                        var elem = document.getElementById("like-button");
                        elem.innerHTML = "Unlike";

                    }, function (error) {
                        console.log(error);
                    });

            } else {
                AjaxFactory.unlikeItem($stateParams.fileId, $localStorage.userId)
                    .then(function (success) {
                        $scope.liked = false;
                        console.log("unliking item" + success.data);
                        $location.url($location.path());
                        var elem = document.getElementById("like-button");
                        elem.innerHTML = "Like";
                        
                    }, function (error) {
                        console.log(error);
                    });
            }
        };

        AjaxFactory.getLikesByUser($localStorage.userId)
            .then(function (success) {
                console.log("getLikesByUser");
                var likedItems = success.data;
                for (var item in likedItems) {
                    console.log("liked: " + likedItems[item].fileId);
                    console.log($stateParams.fileId);
                    if ($stateParams.fileId == likedItems[item].fileId) {
                        $scope.liked = true;
                        console.log($scope.liked);
                        var elem = document.getElementById("like-button");
                        elem.innerHTML = "Unlike";
                    }
                }
                if (!$scope.liked){
                    var elem = document.getElementById("like-button");
                        elem.innerHTML = "Like";
                }
            }, function (error) {
                console.log(error.data);
            });
    });