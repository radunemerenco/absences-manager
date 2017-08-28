angular.module('enj.directives').directive('enjSelect', [ function () {
    'use strict';
    return {
        restrict: 'AE',
        templateUrl: 'app/partials/enj/elements/enjSelect.html',
        scope:{
            model: '=',
            options: '=',
            label: '@',
            name: '@',
            pattern: '@',
            value: '@',
            withClearButton: '=',
            disabled: '=',
            required: '='
        },
        link:function($scope,elem,attrs) {
            var getValue = function(){
                return $scope.value ? $scope.value.trim() : 'id';
            }
            $scope.getValueId = function(item){
                return item[getValue()];
            }
            $scope.getValueText = function(item){
                if(!$scope.pattern){
                    return item[getValue()];
                }
                var pattern = '',
                    patternObj = $scope.pattern.split("&&");
                for(var i = 0; i<patternObj.length; i++){
                    pattern += item[patternObj[i]] ? item[patternObj[i].trim()] : patternObj[i] ;
                }
                return pattern;
            }
            $scope.clear=function(){
                $scope.model = null
            }
        }
    };
}]);