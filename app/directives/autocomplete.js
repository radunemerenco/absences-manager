angular.module('AbsencesApp.directives').directive('autoComplete',['$http',function($http){
    return {
        restrict:'AE',
        scope:{
            selectedTags:'=model'
        },

        templateUrl:'./app/partials/autocomplete.html',
        link:function(scope,elem,attrs){

            scope.suggestions=[];

            scope.selectedTags=[];

            scope.selectedIndex=-1;

            scope.removeTag=function(index){
                scope.selectedTags.splice(index,1);
            }

            scope.search=function(){
                $http.get(attrs.url+'?term='+scope.searchText).success(function(data){
                    if(scope.searchText.length>0) {
                        var newData = [];
                        angular.forEach(data, function (value, key) {
                            if (value.name.toUpperCase().indexOf(scope.searchText.toUpperCase()) !== -1) {
                                var isSelected = false;
                                angular.forEach(scope.selectedTags, function (selectedValue, selectedKey) {
                                    if (selectedValue.id === value.id) {
                                        isSelected = true;
                                    }
                                });
                                if(!isSelected) newData.push(value);
                            }
                        });
                        scope.suggestions = newData;
                        scope.selectedIndex = -1;
                    }
                });
            }

            scope.addToSelectedTags=function(index){
                if(scope.selectedTags.indexOf(scope.suggestions[index])===-1){
                    scope.selectedTags.push(scope.suggestions[index]);
                    scope.searchText='';
                    scope.suggestions=[];
                }
            }

            scope.checkKeyDown=function(event){
                if(event.keyCode===40){
                    event.preventDefault();
                    if(scope.selectedIndex+1 !== scope.suggestions.length){
                        scope.selectedIndex++;
                    }
                }
                else if(event.keyCode===38){
                    event.preventDefault();
                    if(scope.selectedIndex-1 !== -1){
                        scope.selectedIndex--;
                    }
                }
                else if(event.keyCode===13){
                    scope.addToSelectedTags(scope.selectedIndex);
                }
            }

            scope.$watch('selectedIndex',function(val){
                if(val!==-1) {
                    scope.searchText = scope.suggestions[scope.selectedIndex].name;
                }
            });
        }
    }
}]);