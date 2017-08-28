angular.module('enj.directives').directive('enjButtonsCheckbox', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        template: "<button type='button' class='btn' "+
            "ng-class='{activebtn: model[option]}'"+
            "ng-repeat='option in options' "+
            "ng-click='activate(option)'>{{option}} "+
            "</button>",
        scope: { model: '=', options:'=',clickedOption:'='},
        controller: function($scope){
            //$scope.model = [];
            $scope.activate = function(option){
                $scope.clickedOption = option;
                $scope.model[option] = $scope.model[option] ? false : true;
                console.log($scope.model)
                console.log(option)
            };
        }
    };
}]);