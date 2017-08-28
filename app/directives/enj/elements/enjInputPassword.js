angular.module('enj.directives').directive('enjInputPassword', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        templateUrl: 'app/partials/enj/elements/enjInputPassword.html',
        scope:{
            model: '=',
            label: '@',
            name: '@',
            withClearButton: '=',
            disabled: '=',
            passwordMatch: '@',
            required: '=',
            placeholder: '@'
        }
    };
}]);