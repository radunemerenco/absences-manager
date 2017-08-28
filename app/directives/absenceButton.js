angular.module('AbsencesApp.directives').directive('absenceButton',['$http', 'Data', function($http, Data){
    return{
        restrict: 'E',
        template: '<button ng-click="changeAbsence()" type="button" class="btn btn-xs" ng-class="buttonClass">{{buttonText}}</button>',

        scope:{
            absence:'=model',
            studentId: '=',
            sessionId: '=',
            sessionDate: '='
        },
        link:function(scope,elem,attrs){
            var setButtonInfo = function(absence){
                if(absence){
                    scope.buttonClass = "btn-danger"
                    scope.buttonText = "Absent"
                } else{
                    scope.buttonClass = "btn-default"
                    scope.buttonText = "Present"
                }
            }
            setButtonInfo(scope.absence)
            scope.changeAbsence = function(){
                Data.post('changeAbsence', {
                    absence: scope.absence,
                    studentId: scope.studentId,
                    sessionId: scope.sessionId,
                    sessionDate: scope.sessionDate
                }).then(function (results) {
                    Data.toast(results);
                    if (results.status == "success") {
                        scope.absence = results.absence;
                        setButtonInfo(scope.absence)
                    }
                });
            }
        }
    }
}]);