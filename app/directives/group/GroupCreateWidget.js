angular.module("AbsencesApp.directives")
    .directive('groupCreate', ['Data', function (Data) {
        return {
            restrict: 'AE',
            templateUrl: 'app/partials/group/create.html',
            scope:{
                model:'='
            },
            link:function($scope,elem,attrs){

                $scope.submit = function(groupName){
                    Data.post('groupCreate',{
                        groupName:groupName
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