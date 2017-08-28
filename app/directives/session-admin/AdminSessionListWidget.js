angular.module("AbsencesApp.directives")
    .directive('adminSessionList', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/session-admin/list.html',
            scope: {
                model: '='
            },
            link: function ($scope, elem, attrs) {

                $scope.deleteSession = function(sessionId,index) {
                    Data.post('deleteSession', {
                        sessionId: sessionId
                    }).then(function (results) {
                        Data.toast(results);
                        if (results.status == "success") {
                            getSessionList()
                            //$scope.sessions.splice(index,1);
                        }
                    });
                }



                var groupSessions = function(sessions){
                    var result = [];
                    var continueLoop = false;
                    angular.forEach(sessions, function(session, key) {
                        continueLoop = false;
                        angular.forEach(result, function(resultSession, resultKey) {
                            if(session.session_id == resultSession.session_id){
                                continueLoop = true;
                                resultSession.gr_name += ", " + session.gr_name;
                            }
                        });
                        if(!continueLoop) result.push(session);
                    });
                    return result;
                }
                getSessionList = function(){
                    Data.post('getSessionsList').then(function (results) {
                        if (results.status == "success") {
                            $scope.sessions = groupSessions(results.sessions);
                        } else {
                            $scope.sessions = $scope.sessionExtern = null;
                        }
                    });
                }
                getSessionList()
            }
        };
    }]);