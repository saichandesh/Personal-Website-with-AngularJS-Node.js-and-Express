(function(){
	'use strict';

	var educationService = function(apiService){
		this.geteducationContent = function(){
			return apiService.geteducationContent();
		};
	};

	angular
	.module('personalWebsite')
	.service('educationService',[
		'apiService',
		educationService
		]);
})();