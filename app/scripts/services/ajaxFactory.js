"use strict";
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

        ajaxFunctions.login = function (args) {
            return $http.post(baseUrl + 'login', $httpParamSerializer(args), {
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



        return ajaxFunctions;
    });