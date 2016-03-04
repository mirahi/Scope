'use strict';

angular.module('scopeApp')
	.controller('MediaController', function ($scope, AjaxFactory) {
		
        $scope.getImages = function() {
            AjaxFactory.getFiles('image')
                .then(function(success) {
                    $scope.images = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        };

        $scope.getAudios = function() {
            AjaxFactory.getFiles('audio')
                .then(function(success) {
                    $scope.audios = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        };

        $scope.getVideos = function() {
            AjaxFactory.getFiles('video')
                .then(function(success) {
                    $scope.videos = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        };
        
        $scope.getImages();
        $scope.getVideos();
        $scope.getAudios();
        
	});