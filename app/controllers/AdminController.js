'use strict';
angular.module('AbsencesApp.controllers')
    .controller("AdminController", ["$scope", "CONSTANTS", "Data", function($scope, CONSTANTS, Data) {

        $scope.accountTypes = CONSTANTS.users.accountTypes;
        $scope.filtersObj = {};
        $scope.$watch('filtersObj.accountType', function(newVal,oldVal){

            Data.post('getUsers', {
                accountType: newVal
            }).then(function (results) {
                if (results.status == "success") {
                    $scope.usersList = results.users;
                }
            });
        })

        Data.get('getGroups').then(function (results) {
            $scope.groups = results
        });
        $scope.changePermissions = function(user,clicked){

            Data.post('changePermissions', {
                userId: user.user_id,
                permission: clicked,
                method: user.accType[clicked] == false ? 'unset' : 'set'
            }).then(function (results) {
                if (results.status == "success") {
                    //$scope.usersList = results.users;
                }
            });
        }
        $scope.setGroup = function(user){
            Data.post('setGroup', {
                userId: user.user_id,
                groupId: user.id_group
            }).then(function (results) {
                if (results.status == "success") {
                    //$scope.usersList = results.users;
                }
            });
        }

        $scope.$watch('group',function(newVal, oldVal){
            Data.get('getGroups').then(function (results) {
                $scope.groups = results
            });
        });

        $scope.$watch('subject',function(newVal, oldVal){
            Data.post('getSubjects').then(function (results) {
                $scope.subjects = results
            });
        });

    }])