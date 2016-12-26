(function(){
	'use strict';

	var educationController = function(educationService){

		var self = this;
		self.contents = [];

		this.setContent = function(content){
			self.currenteducation = content;
		};

		this.init = function(){
			educationService.geteducationContent().then(function(resp){
				self.contents = resp;
			},function(err){
				console.log("Error in loading education content" + err);
			});
		};

		this.init();
	};

	angular
		.module('personalWebsite')
		.config(['$stateProvider',function($stateProvider){
			$stateProvider
				.state('education',{
					url : '/education',
					templateUrl : 'modules/education/education.html',
					controllerAs : 'education',
					controller : 'educationController'
				});
		}])
		.controller('educationController' , [
			'educationService',
			educationController
		]);
})();