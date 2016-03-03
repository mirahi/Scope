'use strict';

angular.module('scopeApp')
    .service('MediaService', function () {
        var mediaVariables = {
            mediaUrl: 'http://util.mw.metropolia.fi/uploads/',
            userData: {}
        };

        mediaVariables.setVariable = function (key, value) {
            mediaVariables[key] = value;
        };

        mediaVariables.handleError = function (error) {
            console.log(error.data);
        };

        return mediaVariables;
    });