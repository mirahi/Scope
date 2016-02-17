'use strict';

angular.module('scopeApp')
	.controller('detailController', function ($scope, AjaxFactory, $stateParams) {
        var fileId = $stateParams.fileId;
    
        AjaxFactory.getFileById(fileId).then(
            function(response){
//            fileId.path;
            $scope.path = response.data.path;
                console.log(response);
           
        }, function(error){
            alert('Error in getting file path');
            console.log(error);
        });
	});