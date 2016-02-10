angular.module('scopeApp')
    .factory('AjaxFactory', function($http, $httpParamSerializer) {
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
        
        return ajaxFunctions;
    });