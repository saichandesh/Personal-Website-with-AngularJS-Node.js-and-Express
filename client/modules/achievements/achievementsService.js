(function(){

	'use strict';

	var achivementsService = function(apiService){

		this.getCetificateContent = function(){
			return apiService.getCetificateContent();
		};
	};

	angular
		.module('personalWebsite')
		.service('achivementsService',[
			'apiService',
			achivementsService
		]);
})();