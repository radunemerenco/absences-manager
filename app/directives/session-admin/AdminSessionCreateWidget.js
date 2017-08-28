angular.module("AbsencesApp.directives")
    .directive('adminSessionCreate', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/session-admin/create.html',
            scope:{
                model:'=sessions'
            },
            link:function($scope,elem,attrs){
                $scope.sessionObj = {};


                Data.post('getDays').then(function (results) {
                    $scope.days = results
                });
                Data.post('getTimes').then(function (results) {
                    $scope.times = results
                });
                Data.post('getTeachers').then(function (results) {
                    $scope.teachers = results
                });
                Data.post('getSubjects').then(function (results) {
                    $scope.subjects = results
                });
                $scope.submit = function(sessionObj){
                    Data.post('sessionCreate',{
                        sessionObj:sessionObj
                    }).then(function (results) {
                        Data.toast(results);
                        if (results.status == "success") {
                            $scope.model = results;
                        }
                    });
                }
            }
        };
    }]);