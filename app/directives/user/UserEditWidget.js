angular.module("AbsencesApp.directives")
    .directive('userEdit', ['$http', 'Data', '$rootScope', function($http, Data, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/partials/user/user-edit.html',
            scope:{
                model:'=',
                title: '@'
            },
            link:function($scope,elem,attrs){

                $rootScope.$watch('customer',function(newVal, oldVal) {
                    if (newVal.authenticated = true) {
                        $scope.customer = newVal;
                    }
                });
                $scope.submit = function(customer){
                    Data.post('updateUserData', {
                        customer: customer
                    }).then(function (results) {
                        Data.toast(results);
                        if (results.status == "success") {
                            console.log(results)
                        } else {
                            console.log(results)
                        }
                    });
                }
            }
        };
    }]);