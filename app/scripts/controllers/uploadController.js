"use strict";

angular.module('scopeApp')
	.controller('UploadController', function ($scope, AjaxFactory, $localStorage) {
		console.log("asdpasd");
		$scope.setMediaFile = function (element) {
			$scope.mimeType = element.files[0].type;
			$scope.type = $scope.mimeType.substr(0, 5);
			console.log("asdpasd666   " + $scope.type);
		};

		$scope.postFile = function () {
			console.log($localStorage.userId);
			var formdata = new FormData($('#upload-form')[0]);
			formdata.append('user', $localStorage.userId);
			formdata.append('type', $scope.type);
			formdata.append('mime-type', $scope.mimeType);
			var response = AjaxFactory.uploadFile(formdata);
			response.then(function (success) {
				angular.element('#upload-form').hide();
				angular.element('#upload-button').hide();
				angular.element('#close-button').hide();
				angular.element('.modal-body').append("<p>File succesfully added</p>");
				console.log(success.data);
				window.location.reload();
			}, function (err) {
				angular.element('#upload-form').hide();
				angular.element('#upload-button').hide();
				angular.element('.modal-body').append("<p>Error: Oops. Something went wront</p>");
				window.location.reload();
				console.log(err.data);
			});
		};

	});