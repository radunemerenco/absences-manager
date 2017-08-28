'use strict'
angular.module("AbsencesApp.directives")
    .controller("StudentController", ["$scope", "$rootScope", "Data", "CONSTANTS", function($scope,$rootScope,Data,CONSTANTS) {

        $scope.paymentRate = CONSTANTS.absence.paymentRate;
        $scope.paymentCurrency = CONSTANTS.absence.paymentCurrency;
        Data.get('session').then(function (results) {
            if (results.id) {
                $scope.customer = results;
            }
        });
        var getDate = function(date){
            var year = date.getFullYear(),
                month = ("0" + (date.getMonth()+1)).slice(-2),
                date = ("0" + date.getDate()).slice(-2);
            return year+"-"+month+"-"+date
        }
        function getMYFormatAcademicYear (){
            var monthNames = CONSTANTS.monthNames;
            var today = new Date();
            var yearStart = today.getMonth() < 8 ? today.getFullYear()-1 : today.getFullYear();

            var academicYearMonths = [];
            var floatDate = new Date()
            floatDate.setFullYear(yearStart)
            floatDate.setMonth(8)
            for(var i=0; i<9; i++){
                academicYearMonths.push([i,monthNames[floatDate.getMonth()] +' '+ floatDate.getFullYear()])
                floatDate.setMonth(floatDate.getMonth()+1)
            }
            return academicYearMonths;
        }
        var academicYear = getMYFormatAcademicYear();

        var getAcademicYearRangeAsDates = function(){
            var dateFrom = new Date(academicYear[0][1]),
                dateTo = new Date(academicYear[academicYear.length-1][1]);
            dateTo.setMonth(dateTo.getMonth()+1);
            dateTo.setDate(0);
            return {from:getDate(dateFrom),to:getDate(dateTo)}
        }
        var mapAbsencesByMonth = function(absences){
            var MYFormatMonths = []
            angular.forEach(getMYFormatAcademicYear(), function(value, key) {
                MYFormatMonths.push(value[1])
            });
            console.log(MYFormatMonths)

            var absencesInMonth = []
            angular.forEach(absences, function(value, key) {
                console.log(value)
            });
            for (var i=0;i<9;i++){
                absencesInMonth[i] = [i, 0];
            }
            angular.forEach(absences, function(value, key) {
                var absenceDate = new Date(value.absence_date);

                var MYFormatAbsenceMonth = (CONSTANTS.monthNames[absenceDate.getMonth()]+' '+absenceDate.getFullYear()).trim();
                var monthIndex = MYFormatMonths.indexOf(MYFormatAbsenceMonth);
                absencesInMonth[monthIndex][1]++;
            });
            return absencesInMonth;
        }
        var mapAbsencesBySubject = function(absences){
            var absencesBySubject = {};
            var shortName;
            angular.forEach(absences, function(value, key) {
                shortName = value.subject_short_name
                if(!absencesBySubject[shortName]){
                    absencesBySubject[shortName] = {shortName:shortName, absences:0};
                }
                absencesBySubject[shortName].absences++;
            });
            return absencesBySubject;
        }
        var getMostAbsentSubject = function(absences){
            var absencesBySubject = mapAbsencesBySubject(absences);
            var max = 0;
            var maxIndex = 0;
            var mostAbsent = {};
            angular.forEach(absencesBySubject, function(value, key) {
                if(value.absences > max){
                    max = value.absences;
                    mostAbsent = value;
                    maxIndex = key;
                }
            });
            return mostAbsent;
        }
        var countDays = function(dateRange){
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
            var firstDate = new Date(dateRange.from);
            var secondDate = new Date(dateRange.to);
            return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
        }
        var getAbsencesRate = function(totalDays,totalAbsences){
            return parseInt(totalAbsences*100/totalDays);
        }
        var getAbsences = function(userId,dateRange){
            Data.post('getAbsences', {
                userId: userId,
                dateRange: dateRange
            }).then(function (results) {
                if (results.status == "success") {
                    $scope.absences = results.absences
                    $scope.dataset[0].data = mapAbsencesByMonth(results.absences);
                    $scope.totalAbsences = results.absences.length;
                    $scope.totalAmount = results.absences.length*CONSTANTS.absence.paymentRate;
                    $scope.mostAbsent = getMostAbsentSubject(results.absences);
                    $scope.absencesRate = getAbsencesRate(countDays(dateRange),results.absences.length);
                    $scope.absencesBySubject = mapAbsencesBySubject(results.absences);
                }
            });
        }
        $scope.$watch('customer', function(newCustomer,oldVal){
            if(newCustomer.id){
                getAbsences(newCustomer.id,getAcademicYearRangeAsDates());
            }
        })

        $scope.dataset = [{ data: [], yaxis: 100,xaxis: [[0,'Daft'],[1,'Punk']], label: "Absences" }];

        $scope.options = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [
                            {opacity: 0},
                            {opacity: .3}
                        ]
                    }
                },
                points: {show: true, lineWidth: 2, fill: true, fillColor: "#ffffff", symbol: "circle", radius: 5}
            },
            colors: ["#31C0BE", "#8170CA", "#E87352"],
            tooltip: true,
            tooltipOpts: {id: "flotTip", content: "%s %y %x", shifts: {x: 10,y: 20}, defaultTheme: false},
            grid: {hoverable: true, clickable: true, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"},
            xaxis: {
                ticks: getMYFormatAcademicYear(),
                min: 0,
                max: 8
            }
        };
        $scope.callbackFunc = function (plot) {
            plot.getPlaceholder().bind("plotclick", function (event, pos, item) {
                if(item){
                    var dateFrom = new Date(academicYear[item.dataIndex][1]),
                        dateTo = new Date(dateFrom);
                    dateTo.setMonth(dateFrom.getMonth()+1);
                    dateTo.setDate(0);
                    var dateRange = {from: getDate(dateFrom), to: getDate(dateTo)};
                    console.log(item.dataIndex)
                }
            }).bind("plothover", function (event, pos, item) {
                if(item){
                    //console.log(pos)
                }
            })
        };

        //$scope.dataset[0].data = [ [0, 15], [1, 9], [2, 7 ]]
    }]);
