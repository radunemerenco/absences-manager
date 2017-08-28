angular.module('WidgetApp')
.factory('LoginService',  [ '$resource', function($resource) {
	

	return {
		getRepositories : function() {
			return $resource(WIDGET.contextPath +'/'+ 'rest/repository');
		},
		/*doLogin: function() {
		      var post = new Post($scope.logindata);
		      post.$save();
		    	var loginData = $scope.logindata;
				$http({
					method: 'POST',
					url: LOGIN.contextPath +'/j_spring_security_check',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					transformRequest: function(obj) {
						var str = [];
						for(var p in obj)
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						return str.join("&");
					},
					data: $scope.logindata,//loginData,
					//data: {username: "uname", password: "pass"},
					dataType: 'json'
				}).success(function (result) {
					//alert(result)
					console.log(result)
					//var body = angular.element(document).find('body').unmask();
				});
		    }*/
	};
}]);
/*
.service('LoginService', [ '$resource', function($resource) {
	
	this.getRepositories = function(){	
		return $resource(LOGIN.contextPath +'/'+ 'rest/repository');
		console.log('aaa')
		console.log($resource)
        $resource(LOGIN.contextPath +'/'+ 'rest/repository').query(function(result){
        	console.log(result)
        });

	}
	this.doLogin = function(loginData) {

			$http({
				method: 'POST',
				url: LOGIN.contextPath +'/j_spring_security_check',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: loginData,//loginData,
				//data: {username: "uname", password: "pass"},
				dataType: 'json'
			}).success(function (result) {
				//alert(result)
				console.log(result)
				//var body = angular.element(document).find('body').unmask();
			});
	    }
}]);*/