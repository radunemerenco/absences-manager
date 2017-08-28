angular.module("AbsencesApp.directives")
    .directive('groupList', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/group/list.html',
            scope: {
                model: '='
            },
            link: function ($scope, elem, attrs) {
                $scope.deleteGroup = function(groupId,index) {
                    Data.post('deleteGroup', {
                        groupId: groupId
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