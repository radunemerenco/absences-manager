angular.module('enj.directives').directive('enjMiniBox', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        templateUrl: 'app/partials/enj/elements/enjMiniBox.html',
        scope:{
            icon: '@',
            value: '@',
            label: '@',
            currency: '@',
            background: '@'
        },
        link: function(){
        }
    };
}]);