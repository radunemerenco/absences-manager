'use strict';
angular.module('AbsencesApp.controllers')
    .controller("NavigationController", ["$scope", "$location", "CONSTANTS", function($scope, $location, CONSTANTS) {
        $scope.menuItems = CONSTANTS.pages;
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];
        $scope.toggleNavMenu = function(showNavMenu){
            showNavMenu = true ? false : true;
        };
        $scope.itemClicked = function(item){
            item.collapse = !item.collapse;
            if(typeof item.link != "undefined"){$location.path(item.link)};
            return false;
        }
        $scope.checkPermissions = function(menuItem,accountType){
            if(menuItem.accountTypes){
                if(menuItem.accountTypes.indexOf(accountType) != -1) {
                    return true
                }else{
                    return false
                }
                return true
            }
            return true;
        }

    }])