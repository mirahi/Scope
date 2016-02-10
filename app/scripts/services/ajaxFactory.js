'use strict';

angular.module('scopeApp')
    .factory('AjaxFactory', function ($http, $httpParamSerializer) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var ajaxFunctions = {};

        ajaxFunctions.uploadFile = function (args) {
            return $http.post(urlBase + 'upload', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };
    
    ajaxFunctions.register = function(args){
        return $http.post(urlBase + 'register', $httpParamSerializer(args), {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };
   

        return ajaxFunctions;
    });