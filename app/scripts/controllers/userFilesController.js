'use strict';

angular.module('scopeApp')
	.controller('UserFilesController', function ($scope, $sce, AjaxFactory, MediaService) {

		$scope.trustSrc = function (src) {
			return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
		};

		function videoURL($scope, $sce) {
            console.log("jojoo")
			var videoUrl = 'http://util.mw.metropolia.fi/uploads/{{ file.path }}';
			$scope.videoUrl = $sce.trustAsResourceUrl(videoUrl);
            console.log($scope.videoUrl);
		}

		$scope.$on('mediaevent', function (evt) {
			console.log(evt);
			var user = MediaService.userData;

			var request = AjaxFactory.fileByUser(user.userId);

			request.then(function (response) {
				$scope.files = response.data;
			}, function (error) {
				console.log(error.data);
			});
		});
	});