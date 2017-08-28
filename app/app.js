'use strict';
angular.module('AbsencesApp')
.run(["$rootScope", "$location", "Data", "CONSTANTS", function ($rootScope, $location, Data, CONSTANTS) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.customer = {};
            $rootScope.customer.authenticated = false;
            $rootScope.customer.accountType = 'guest';
            Data.get('session').then(function (results) {
                if (results.id) {
                    $rootScope.customer.currentPassword = results.password;
                    $rootScope.customer = results;
                    $rootScope.customer.authenticated = true;

                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/user/signup' || nextUrl == '/user/login' || nextUrl == "/dashboard") {
                        $location.path("/" + $rootScope.customer.accountType + "-dashboard");
                    }
                    var pageObject = getObjects(CONSTANTS.pages, "link", next.$$route.originalPath);
                    if (pageObject.length && pageObject[0]["accountTypes"] && pageObject[0]["accountTypes"].indexOf($rootScope.customer.accountType) == -1) {
                        $location.path("/access-denied");
                    }
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl != '/user/signup' && nextUrl != '/user/login') {
                        $location.path("/user/login");
                    }
                }
            });
    });
}])

.config(["$routeProvider", "CONSTANTS", function(a,CONSTANTS) {

    var accountType = null;
    var b = [], c;
    angular.forEach(CONSTANTS.pages, function(value, key) {
        typeof value.link != "undefined" ? b.push(value): "" ;
        angular.forEach(value.children, function(childValue, key) {
            childValue.controller = value.controller;
            b.push(childValue);
        })
    });

    c = function(b) {
        var c, d;
        return d = b.link, c = {
            templateUrl: "views/" + b.link + ".html",
            controller: b.controller
        },
            a.when(d, c), a
    }, b.forEach(function(a) {
        return c(a)
    }), a.when("/", {
        redirectTo: "/dashboard"
    }).when("/404", {
        templateUrl: "views/404.html"
    }).when("/dashboard", {
    }).when("/access-denied", {
        templateUrl: "views/access-denied.html"
    }).otherwise({
        redirectTo: "/404"
    })
}])
/*

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('spinnerHttpInterceptor');
    var spinnerFunction = function (data, headersGetter) {
        $('#spinner').show();
        return data;
    };
    $httpProvider.defaults.transformRequest.push(spinnerFunction);
})
.factory('spinnerHttpInterceptor', function($q) {
    return {
        // optional method
        'request': function(config) {
            $('#spinner').hide();
            return config;
        },

        // optional method
        'requestError': function(rejection) {
            // do something on error
            $('#spinner').hide();
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },

        // optional method
        'response': function(response) {
            // do something on success
            $('#spinner').hide();
            return response;
        },

        // optional method
        'responseError': function(rejection) {
            // do something on error
            $('#spinner').hide();
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        }
    };
});
*/
