angular.module('enj.directives').directive('enjTextarea', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        templateUrl: 'app/partials/enj/elements/enjTextarea.html',
        scope:{
            model: '=',
            label: '@',
            name: '@',
            disabled: '=',
            required: '='
        }
    };
}]);