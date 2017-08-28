angular.module("AbsencesApp.directives")
    .directive('sessionList', ['Data', function(Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/session/list.html',
            scope:{
                filtersObj:'=',
                sessionExtern: '=model'
            },
            link:function($scope,elem,attrs){

                $scope.accordion = {
                    open: true
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
                var getDates = function(startDate, stopDate) {
                    var dateArray = new Array();
                    var startDate = new Date(startDate),
                        stopDate = new Date(stopDate);
                    var currentDate = startDate;
                    while(currentDate<=stopDate){
                        var year = currentDate.getFullYear(),
                            month = ("0" + (currentDate.getMonth()+1)).slice(-2),
                            date = ("0" + currentDate.getDate()).slice(-2),
                            day = currentDate.getDay();
                        dateArray.push({date: year+"-"+month+"-"+date, day: day})
                        currentDate.setDate(currentDate.getDate()+1)
                    }
                    return dateArray;
                }
                $scope.sessionInfoAccordion = {open: true};

                $scope.sessionClick = function(sessionIndex,date){
                    $scope.selectedRow = "selected-row";
                    $scope.sessionExtern = {sessionIndex:sessionIndex, date: date};
                }
                $scope.isActive = function(sessionIndex,date) {
                    return $scope.sessionExtern && $scope.sessionExtern.sessionIndex === sessionIndex && $scope.sessionExtern.date===date;
                };

                $scope.$watch('filtersObj',function(newVal, oldVal){
                    $scope.sessionInfoAccordion.open = true;
                    if(typeof (newVal) === 'undefined') return
                    if(datePicker = newVal.datePicker){
                        var sessionDate = {}
                        if(datePicker.from && datePicker.to){
                            sessionDate.from = newVal.datePicker.from;//.getFullYear() +'-'+ ("0" + (newVal.datePicker.from.getMonth()+1)).slice(-2) +'-'+ ("0" + newVal.datePicker.from.getDate()).slice(-2);
                            sessionDate.to = newVal.datePicker.to;//.getFullYear() +'-'+ ("0" + (newVal.datePicker.to.getMonth()+1)).slice(-2) +'-'+ ("0" + newVal.datePicker.to.getDate()).slice(-2);
                            $scope.datesArray = getDates(sessionDate.from,sessionDate.to);
                        }
                    }

                    var completeDates = function(dates,sessions){
                        var result = [];
                        var sessionAdded;
                        var previousDate = {};
                        var newWeek = false;
                        angular.forEach(dates, function(dateVal, dateKey) {
                            if(dateVal.day < previousDate.day && sessionAdded){
                                newWeek = true;
                            }
                            angular.forEach(sessions, function(sessionVal, sessionKey){
                                if(dateVal.day == sessionVal.day_id){
                                    result.push(JSON.parse(JSON.stringify(sessionVal)))
                                    result[result.length-1].date = dateVal.date
                                    if(newWeek){result[result.length-1].newWeek = "new-week"; newWeek = false;}
                                    sessionAdded = true;
                                }
                            });
                            previousDate = dateVal;
                        });
                        return result;
                    }

                    Data.post('getSessionsList', {
                        sessionDate: sessionDate,
                        sessionGroups: newVal.groups,
                        sessionTeacher: newVal.teacher,
                        sessionTime: newVal.time,
                        sessionSubject: newVal.subject
                    }).then(function (results) {
                        if (results.status == "success") {
                            $scope.sessions = completeDates($scope.datesArray, groupSessions(results.sessions));
                        } else {
                            $scope.sessions = $scope.sessionExtern = null;
                        }
                    });

                }, true);

            }
        };
    }]);