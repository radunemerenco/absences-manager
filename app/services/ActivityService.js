angular.module('WidgetApp')
.factory('ActivityService',  [ '$resource', function($resource) {

	return {
		getActivities : function(projetId) {
			return $resource(WIDGET.contextPath +'/'+ 'rest/projactivities/'+projetId);
		},
	};
}]);
