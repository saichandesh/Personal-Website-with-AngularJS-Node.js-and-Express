(function(){
	'use strict';

	var skillController = function(skillService){

		var self = this;
		self.contents = [];

		this.setContent = function(content){
			self.currentskill = content;
		};

		this.init = function(){
			skillService.getskillContent().then(function(resp){
				self.contents = resp;
			},function(err){
				console.log("Error in loading skill content" + err);
			});
		};

		this.init();
	};

	angular
		.module('personalWebsite')
		.config(['$stateProvider',function($stateProvider){
			$stateProvider
				.state('skill',{
					url : '/skill',
					templateUrl : 'modules/skill/skill.html',
					controllerAs : 'skill',
					controller : 'skillController'
				});
		}])
		.controller('skillController' , [
			'skillService',
			skillController
		]);
})();