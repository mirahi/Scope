'use strict';

angular.module('scopeApp')
	.controller('MediaController', function ($scope, AjaxFactory) {


<<<<<<< HEAD

		$scope.getImages = function () {
			AjaxFactory.getFiles('image')
				.then(function (success) {
					$scope.images = success.data;
					console.log(success.data);
				}, function (error) {
					console.log(error.data);
				});
		}

		$scope.getAudios = function () {
			AjaxFactory.getFiles('audio')
				.then(function (success) {
					$scope.audios = success.data;
					console.log(success.data);
				}, function (error) {
					console.log(error.data);
				});
		}

		$scope.getVideos = function () {
			AjaxFactory.getFiles('video')
				.then(function (success) {
					$scope.videos = success.data;
					console.log(success.data);
				}, function (error) {
					console.log(error.data);
				});
		}

		$scope.getImages();
		$scope.getAudios();
		$scope.getVideos();

=======
        $scope.getVideos = function() {
            AjaxFactory.getFiles('video')
                .then(function(success) {
                    $scope.videos = success.data;
                    console.log(success.data);
                }, function(error) {
                    console.log(error.data);
                });
        }
        
        $scope.getImages();
        $scope.getVideos();
        $scope.getAudios();
        
>>>>>>> a0f3e8bc225506da07209b661e4c72fb92b9a25c
	});