(function(){
	'use strict';

	var workService = function(apiService){
		this.getWorkContent = function(){
			return apiService.getWorkContent();
		};
	};

	angular
	.module('personalWebsite')
	.service('workService',[
		'apiService',
		workService
		]);
})();