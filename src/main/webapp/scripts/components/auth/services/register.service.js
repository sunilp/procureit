'use strict';

angular.module('eprxApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


