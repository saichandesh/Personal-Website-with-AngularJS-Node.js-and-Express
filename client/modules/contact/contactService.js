(function(){
	'use strict';

	var contactService = function(apiService){
		this.getContactContent = function(){
			return apiService.getContactContent();
		};
	};

	angular
	.module('personalWebsite')
	.service('contactService',[
		'apiService',
		contactService
		]);
})();