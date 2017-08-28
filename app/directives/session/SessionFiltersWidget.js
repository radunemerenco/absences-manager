angular.module("AbsencesApp.directives")
    .directive('sessionFilters', ['$http', 'Data', '$rootScope', function($http, Data, $rootScope) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/session/filters.html',
            scope:{
                filtersObj:'=model'
            },
            link:function($scope,elem,attrs){
                $scope.accordion = {
                    open: true
                }
                $scope.today = new Date();
                $scope.filtersObj = {};
                Data.post('getTimes').then(function (results) {
                    $scope.times = results
                });

                $rootScope.$watch('customer',function(newVal, oldVal){
                    if(newVal.authenticated = true){
                        var teacherUserId = $rootScope.customer.accountType == 'teacher' ? $rootScope.customer.id : null
                        $scope.isAdmin = $rootScope.customer.accountType == 'admin' ? true: false;
                        Data.post('getTeachers',{userId:teacherUserId}).then(function (results) {
                            $scope.teachers = results
                            if(results.length == 1){
                                $scope.filtersObj.teacher = results[0].id;
                            }
                        });

                        Data.post('getSubjects').then(function (results) {
                            $scope.subjects = results
                        });
                    }
                });
            }
        };
    }]);