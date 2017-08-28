angular.module('enj.directives').directive('enjButtonsRadio', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        template: "<button type='button' class='btn' "+
            "ng-class='{activebtn: option == model}'"+
            "ng-repeat='option in options' "+
            "ng-click='activate(option)'>{{option}} "+
            "</button>",
        scope: { model: '=', options:'='},
        controller: function($scope){
            $scope.activate = function(option){
                $scope.model = option;
            };
        }
    };
}]);