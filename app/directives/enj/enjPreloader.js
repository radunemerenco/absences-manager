angular.module('enj.directives').directive('enjPreloader', ['$http', function ($http) {
    'use strict';
    return {
        restrict: 'AE',
        template:   '<div class="preloader" style="position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background-color: #2b2d35;text-align: center;z-index: 9999999;">'+
                        '<div class="loader-item" style="  margin: 100px auto 0;width: 70px;height: 70px;text-align: center;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;">'+
                            '<img src="images/loading.gif" title="Loading..." alt="loader">'+
                        '</div>'+
                    '</div>',

        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    elm.show();
                }else{
                    elm.hide();
                }
            });
        }
    };
}]);