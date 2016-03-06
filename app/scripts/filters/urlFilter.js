'use strict';

angular.module('scopeApp')
    .filter("trustUrl", function ($sce) {
    return function (filePath) {
        return $sce.trustAsResourceUrl('http://util.mw.metropolia.fi/uploads/' + filePath);
    };
    });