"use strict";

angular.module('scopeApp')
    .controller('CommentController', function ($scope, $localStorage, AjaxFactory, $stateParams, $location, $route) {
        console.log("commentcontroller");

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
                    $route.reload();
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
                AjaxFactory.likeItem($scope.itemId, $localStorage.userId)
                    .then(function (success) {
                        console.log(success.data);
                        $location.url($location.path());
                        $route.reload();
                    }, function (error) {
                        console.log(error);
                    });

            } else {
                AjaxFactory.unlikeItem($scope.itemId, $localStorage.userId)
                    .then(function (success) {
                        console.log(success.data);
                        $location.url($location.path());
                        $route.reload();
                    }, function (error) {
                        console.log(error);
                    });
            }
        };
    });