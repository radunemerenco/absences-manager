angular.module('enj.directives').directive('enjInputText', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        templateUrl: 'app/partials/enj/elements/enjInputText.html',
        scope:{
            model: '=',
            label: '@',
            name: '@',
            withClearButton: '=',
            disabled: '=',
            required: '=',
            placeholder: '@'
        }
    };
}]);