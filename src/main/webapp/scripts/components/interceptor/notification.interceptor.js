 'use strict';

angular.module('eprxApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-eprxApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-eprxApp-params')});
                }
                return response;
            }
        };
    });
