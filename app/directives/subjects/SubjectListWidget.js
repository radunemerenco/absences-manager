angular.module("AbsencesApp.directives")
    .directive('subjectList', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/subject/list.html',
            scope: {
                model: '='
            },
            link: function ($scope, elem, attrs) {

                $scope.deleteSubject = function(subjectId,index) {
                    Data.post('deleteSubject', {
                        subjectId: subjectId
                    }).then(function (results) {
                        Data.toast(results);
                        if (results.status == "success") {
                            $scope.model.splice(index,1);
                        }
                    });
                }
            }
        };
    }]);