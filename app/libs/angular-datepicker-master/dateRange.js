'use strict';

var Module = angular.module('datePicker');

Module.directive('dateRange', function () {
    return {
        templateUrl: 'app/partials/datepicker/daterange.html',
        scope: {
            start: '=',
            end: '=',
            todayByDefault: '=',
            differenceDays: '='
        },
        link: function (scope, element, attrs) {

            /*
             * If no date is set on scope, set current date from user system
             */
            if(scope.todayByDefault && scope.differenceDays){
                var today = new Date();
                var xDaysDifference = new Date().setDate(today.getDate()+(scope.differenceDays));
                var from,to;
                if (today < xDaysDifference) {
                    from = today,to=xDaysDifference
                } else {
                    from = xDaysDifference,to=today
                }
                scope.start = new Date(scope.start || from);
                scope.end = new Date(scope.end || to);
            }

            attrs.$observe('disabled', function(isDisabled){
                scope.disableDatePickers = !!isDisabled;
            });
            scope.$watch('start.getTime()', function (value) {
                if (value && scope.end && value > scope.end.getTime()) {
                    scope.end = new Date(value);
                }
            });
            scope.$watch('end.getTime()', function (value) {
                if (value && scope.start && value < scope.start.getTime()) {
                    scope.start = new Date(value);
                }
            });
        }
    };
});
