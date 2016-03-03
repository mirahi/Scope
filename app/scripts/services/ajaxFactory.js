'use strict';
angular.module('scopeApp')
    .factory('AjaxFactory', function ($http, $httpParamSerializer) {
        var baseUrl = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var ajaxFunctions = {};

        ajaxFunctions.uploadFile = function (args) {
            return $http.post(baseUrl + 'upload', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };

        ajaxFunctions.register = function (args) {
            return $http.post(baseUrl + 'register', $httpParamSerializer(args), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        ajaxFunctions.userLogin = function (userData) {
            return $http.post(baseUrl + 'login', $httpParamSerializer(userData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        ajaxFunctions.getFiles = function (args) {
            return $http.get(baseUrl + 'files/type/' + args);
        };

        ajaxFunctions.getAllFiles = function () {
            return $http.get(baseUrl + 'files/');
        };

        ajaxFunctions.getFileById = function (fileId) {
            return $http.get(baseUrl + 'file/' + fileId);
        };

        ajaxFunctions.postComment = function (form, fileId) {
            console.log(fileId + $httpParamSerializer(form));
            return $http.post(baseUrl + 'comment/file/' + fileId, $httpParamSerializer(form), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        ajaxFunctions.getItemComments = function (fileId) {
            return $http.get(baseUrl + 'comments/file/' + fileId);
        };
    
        ajaxFunctions.likeItem = function (fileId, userId) {
            return $http.get(baseUrl + 'like/' + fileId + '/' + userId);
        };

        ajaxFunctions.unlikeItem = function (fileId, userId) {
            return $http.get(baseUrl + 'unlike/' + fileId + '/' + userId);
        };
    
        ajaxFunctions.getLikesByUser = function (userId) {
            return $http.get(baseUrl + 'likes/user/' + userId);
        };

        return ajaxFunctions;
    });