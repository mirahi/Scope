'use strict';

angular.module('scopeApp')
    .controller('detailController', function ($scope, AjaxFactory, $stateParams, $sce) {
        var fileId = $stateParams.fileId;
        $scope.isAudio = $scope.isVideo = $scope.isImage = false;
        AjaxFactory.getFileById(fileId).then(
            function (response) {
                console.log(response);
                $scope.path = response.data.path;

                if (response.data.type === "audio") {
                    $scope.isAudio = true;
                    $scope.path = $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/uploads/"+$scope.path);
                }

                if (response.data.type === "video") {
                    $scope.isVideo = true;                    
                    $scope.path = $sce.trustAsResourceUrl("http://util.mw.metropolia.fi/uploads/"+$scope.path);
                }

                if (response.data.type === "image") {
                    $scope.isImage = true;
                }

            },
            function (error) {
                alert('Error in getting file path');
                console.log(error);
            });
    
    var activeUrl = null;

    $scope.paused = true;

    $scope.$on('wavesurferInit', function (e, wavesurfer) {
        $scope.wavesurfer = wavesurfer;

        $scope.wavesurfer.on('play', function () {
            $scope.paused = false;
        });

        $scope.wavesurfer.on('pause', function () {
            $scope.paused = true;
        });

        $scope.wavesurfer.on('finish', function () {
            $scope.paused = true;
            $scope.wavesurfer.seekTo(0);
            $scope.$apply();
        });
    });

    $scope.play = function (url) {
        if (!$scope.wavesurfer) {
            return;
        }

        activeUrl = url;

        $scope.wavesurfer.once('ready', function () {
            $scope.wavesurfer.play();
            $scope.$apply();
        });

        $scope.wavesurfer.load(activeUrl);
    };

    $scope.isPlaying = function (url) {
        return url === activeUrl;
    };
    });

                  