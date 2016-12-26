(function(){
	'use strict';

	var skillService = function(apiService){
		this.getskillContent = function(){
			return apiService.getskillContent();
		};
	};

	angular
	.module('personalWebsite')
	.service('skillService',[
		'apiService',
		skillService
		]);
})();