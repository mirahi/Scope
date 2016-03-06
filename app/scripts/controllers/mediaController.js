'use strict';

angular.module('scopeApp')
    .controller('MediaController', function ($scope, AjaxFactory) {

        $scope.loadMore = function () {
            console.log("loadMore");
            var last = $scope.images[$scope.images.length - 1];
            for (var i = 1; i <= 8; i++) {
                $scope.images.push(last + i);
            }
        };

        $scope.getImages = function () {
            AjaxFactory.getFiles('image')
                .then(function (success) {
                    $scope.images = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });
        };

        $scope.getAudios = function () {
            AjaxFactory.getFiles('audio')
                .then(function (success) {
                    $scope.audios = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });
        };

        $scope.getVideos = function () {
            AjaxFactory.getFiles('video')
                .then(function (success) {
                    $scope.videos = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.log(error.data);
                });
        };
        $scope.getItems = function () {
            AjaxFactory.getAllFiles()
                .then(function (success) {
                    $scope.items = success.data;
                    console.log(success.data);
                }, function (error) {
                    console.lg(error.data);

                });
        };

        $scope.getImages();
        $scope.getVideos();
        $scope.getAudios();
        $scope.getItems();

    });