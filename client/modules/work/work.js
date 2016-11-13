(function(){
	'use strict';

	var workController = function(workService){

		var self = this;

		this.init = function(){
			workService.getWorkContent().then(function(resp){
				self.contents = resp;
			},function(err){
				console.log("Error in loading work content" + err);
			});
		};

		this.init();
	};

	angular
		.module('personalWebsite')
		.config(['$stateProvider',function($stateProvider){
			$stateProvider
				.state('work',{
					url : '/work',
					templateUrl : 'modules/work/work.html',
					controllerAs : 'work',
					controller : 'workController'
				});
		}])
		.controller('workController' , [
			'workService',
			workController
		]);
})();