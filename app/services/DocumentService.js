angular.module('WidgetApp')
.factory('DocumentService',  [ '$resource', function($resource) {

	return {
		getDocuments : function(antivityId) {
			return $resource(WIDGET.contextPath +'/'+ 'rest/getdocuments/'+antivityId);
		},
	};
}]);