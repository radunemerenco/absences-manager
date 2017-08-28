angular.module('enj.directives').directive('enjPanel', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        templateUrl: 'app/partials/enj/elements/enjPanel.html',
        transclude: true,
        scope:{
            title: '@',
            titleIcon: '@'
        },
        link: function(){
        }
    };
}]);