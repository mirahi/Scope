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
                        console.log(success.data);
                        $location.url($location.path());
                        $scope.liked = true;

                        //  $window.location.reload();
                    }, function (error) {
                        console.log(error);
                    });

            } else {
                AjaxFactory.unlikeItem($stateParams.fileId, $localStorage.userId)
                    .then(function (success) {
                        console.log(success.data);
                        $location.url($location.path());
                        $scope.liked = false;
                        //   $window.location.reload();
                    }, function (error) {
                        console.log(error);
                    });
            }
            // $scope.$apply();

        };

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