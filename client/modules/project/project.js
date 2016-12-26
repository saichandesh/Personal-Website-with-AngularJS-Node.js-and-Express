(function(){
	'use strict';

	var projectController = function(projectService){

		var self = this;
		self.contents = [];

		this.setContent = function(content){
			self.currentProject = content;
		};

		this.init = function(){
			projectService.getprojectContent().then(function(resp){
				self.contents = resp;
			},function(err){
				console.log("Error in loading project content" + err);
			});
		};

		this.init();
	};

	angular
		.module('personalWebsite')
		.config(['$stateProvider',function($stateProvider){
			$stateProvider
				.state('project',{
					url : '/project',
					templateUrl : 'modules/project/project.html',
					controllerAs : 'project',
					controller : 'projectController'
				});
		}])
		.controller('projectController' , [
			'projectService',
			projectController
		]);
})();