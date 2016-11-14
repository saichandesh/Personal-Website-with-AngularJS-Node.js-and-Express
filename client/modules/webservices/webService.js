(function(){
	'use strict';

	var webService = function($resource){

		var APIManager={
			Req:      function(method, headers, url, data) {
				this.method =method;
				this.headers=headers;
				this.url    =url;
				this.data   =data;
			},
			Head:     function(contentType) {
				return {
					'Content-Type':  contentType,
					'Cache-Control': 'no-store'
				};
			}
		};

		var devURL = 'http://localhost:8080';
		var URL = 'http://saichandesh.me:8080';


		// A generic resource URI to set the headers.
		APIManager.genericResourceURI = function(networkConfig) {
			var validNetworkConfig = APIManager.computeConfigArgs(networkConfig);
			var headers = new APIManager.Head('application/x-www-form-urlencoded;charset=UTF-8');
			validNetworkConfig.headers = angular.extend({}, headers, validNetworkConfig.headers);

			return validNetworkConfig;
		};

		// A generic utility method for processing all Network config parameters.
		APIManager.computeConfigArgs = function(networkConfig) {
			// override the arguments with its default values when it goes undefined
			networkConfig.url = angular.isDefined(networkConfig.url) ? networkConfig.url : "";
			networkConfig.params = angular.isDefined(networkConfig.params) ? networkConfig.params : {};
			networkConfig.data = angular.isDefined(networkConfig.data) ? networkConfig.data : undefined;
			networkConfig.headers = angular.isDefined(networkConfig.headers) ? (angular.isObject(networkConfig.headers) ? networkConfig.headers : (console.log(networkConfig.headers, " is not an object"))) : {};

			return networkConfig;
		};

		APIManager.doGetAll = function(networkConfig) {

			networkConfig = APIManager.genericResourceURI(networkConfig);
			var actualURL = devURL + '/' + networkConfig.url;

			var resourceObject = $resource(actualURL, networkConfig.params, {
				get: {
					method: 'GET',
					params: networkConfig.params,
					isArray: true,
					headers: networkConfig.headers
				}
			});
			return resourceObject.get().$promise;
		};

		return APIManager;


	};

	angular
		.module('personalWebsite')
		.factory('webService',[
			'$resource',
			webService
		]);
})();