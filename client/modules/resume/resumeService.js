(function(){
	'use strict';

	var resumeService = function(apiService){
		this.getResumeContent = function(){
			return apiService.getResumeContent();
		};
	};

	angular
	.module('personalWebsite')
	.service('resumeService',[
		'apiService',
		resumeService
		]);
})();