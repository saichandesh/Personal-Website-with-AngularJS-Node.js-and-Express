(function(){

	'use strict';

	var contactController = function(contactService){

		var self = this;
		self.contents = [];

		this.init = function(){
			self.widthSize = $(window).width();
			contactService.getContactContent().then(function(resp){
				self.contents = resp;
			},function(err){
				console.log("Error in loading contact content" + err);
			});
		};

		this.init();
	};

	angular
		.module('personalWebsite')
		.config(['$stateProvider',function($stateProvider){
			$stateProvider
				.state('contact',{
					url : '/contact',
					templateUrl : 'modules/contact/contact.html',
					controllerAs : 'contact',
					controller : 'contactController'
				});
		}])
		.controller('contactController',[
			'contactService',
			contactController
		]);
})();