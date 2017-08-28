angular.module("AbsencesApp.directives")
    .directive('sessionInfo', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/session/info.html',
            scope:{
                session:'='
            },
            link:function($scope,elem,attrs){

                $scope.newGroup = true;
                $scope.setNewGroup = function (val) {
                    $scope.newGroup = val;
                }
                $scope.getNewGroup = function () {
                    return $scope.newGroup;
                }

                $scope.$watch('session',function(newVal, oldVal){

                    if(newVal && newVal.sessionIndex && newVal.date){
                        Data.post('getGroupsAtSession', {
                            sessionId: newVal.sessionIndex,
                            sessionDate: newVal.date
                        }).then(function (results) {
                            if (results.status == "success") {
                                if(newAbsence) delete newAbsence;
                                var newAbsence = {groups:[]};
                                angular.forEach( results.absences, function(group, key) {
                                    if(!newAbsence.groups[group.id_group]) newAbsence.groups[group.id_group] = [];
                                    newAbsence.groups[group.id_group].push(group);
                                });
                                $scope.groups = []
                                angular.forEach( newAbsence.groups, function(group, key) {
                                    $scope.groups.push(group)
                                });
                            }
                        });
                    }
                });
            }
        };
    }]);