'use strict';
angular.module('AbsencesApp.controllers')
    .controller("AppController", ["$scope", "$rootScope", "$routeParams", "$location", "$http", "Data", "CONSTANTS", function($scope, $rootScope, $routeParams, $location, $http, Data, CONSTANTS) {
        $scope.main = CONSTANTS.app
        $scope.hideNavMenu = false
        $scope.toggleNavMenu = function(){
            if($scope.hideNavMenu == false){
                $scope.hideNavMenu = true;
                $scope.wrapperClass = "toggled"
            }else{
                $scope.hideNavMenu = false;
                $scope.wrapperClass = ""
            }
        };

        //initially set those objects to null to avoid undefined error
        $scope.login = {};
        $scope.signup = {};
        $scope.doLogin = function (customer) {
            Data.post('login', {
                customer: customer
            }).then(function (results) {
                Data.toast(results);
                if (results.status == "success") {
                    $location.path('/dashboard');
                }
            });
        };
        $scope.signup = {email:'',password:'',name:'',phone:'',address:''};
        $scope.signUp = function (customer) {
            Data.post('signUp', {
                customer: customer
            }).then(function (results) {
                Data.toast(results);
                if (results.status == "success") {
                    $location.path('dashboard');
                }
            });
        };
        $scope.logout = function () {
            Data.get('logout').then(function (results) {
                Data.toast(results);
                $location.path('user/login');
            });
        }

    }])