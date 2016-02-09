angular.module('scopeApp')
    .factory('AjaxFactory', function($http) {
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
        
        
        
        return ajaxFunctions;
    });