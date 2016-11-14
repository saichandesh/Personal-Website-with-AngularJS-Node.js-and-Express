(function(){
	'use strict';

	var resumeController = function(resumeService){

		var self = this;
		self.contents = [];

		this.init = function(){
			resumeService.getResumeContent().then(function(resp){
				self.contents = resp;
			},function(err){
				console.log("Error in loading resume content" + err);
			});
		};

		this.init();
	};

	angular
		.module('personalWebsite')
		.config(['$stateProvider',function($stateProvider){
			$stateProvider
				.state('resume',{
					url : '/resume',
					templateUrl : 'modules/resume/resume.html',
					controllerAs : 'resume',
					controller : 'resumeController'
				});
		}])
		.controller('resumeController' , [
			'resumeService',
			resumeController
		]);
})();