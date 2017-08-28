'use strict'
angular.module("AbsencesApp.directives")
.controller("StudentController", ["$scope", "$rootScope", "Data", function($scope,$rootScope,Data) {

        var getDate = function(date){
            var year = date.getFullYear(),
                month = ("0" + (date.getMonth()+1)).slice(-2),
                date = ("0" + date.getDate()).slice(-2);
            return year+"-"+month+"-"+date
        }
        $rootScope.$watch('customer',function(newVal, oldVal){
            console.log(newVal)
        })
        function getThisAcademicYear (){
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
        var academicYear = getThisAcademicYear();

        var getAcademicYearRangeAsDates = function(){
            var dateFrom = new Date(academicYear[0][1]),
                dateTo = new Date(academicYear[academicYear.length-1][1]);
            dateTo.setMonth(dateTo.getMonth()+1);
            dateTo.setDate(0);
            return {from:getDate(dateFrom),to:getDate(dateTo)}
        }

        var getAbsences = function(userId,dateRange){
            console.log(dateRange)
            console.log(userId)
            Data.post('getAbsences', {
                userId: $rootScope.customer.id,
                dateRange: dateRange
            }).then(function (results) {
                if (results.status == "success") {
                    console.log(results)
                }
            });
        }
        var absencesThisYear = getAbsences($rootScope.customer.id,getAcademicYearRangeAsDates());
        console.log(absencesThisYear)

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
                ticks: getThisAcademicYear(),
                min: 0,
                max: 9
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
                    getAbsences(dateRange)
                }
            }).bind("plothover", function (event, pos, item) {
                if(item){
                    //console.log(pos)
                }
            })
        };

        $scope.dataset[0].data = [ [0, 15], [1, 9], [2, 7 ]]
}]);
