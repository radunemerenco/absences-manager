angular.module("AbsencesApp.directives")
    .directive('subjectCreate', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/subject/create.html',
            scope: {
                model: '='
            },
            link: function ($scope, elem, attrs) {
                $scope.submit = function (shortName, fullName) {
                    Data.post('subjectCreate', {
                        shortName: shortName,
                        fullName: fullName
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