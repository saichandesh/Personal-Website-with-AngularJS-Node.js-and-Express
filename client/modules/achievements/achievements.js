(function(){
	'use strict';

	var achievementsController = function(achivementsService){

		var self = this;
		self.contents = [];

		this.showfile = function(){
			console.log("ff");
		};

		this.init = function(){
			achivementsService.getCetificateContent().then(function(resp){
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
				.state('achievements',{
					url : '/achievements',
					templateUrl : 'modules/achievements/achievements.html',
					controllerAs : 'achievements',
					controller : 'achievementsController'
				});
		}])
		.controller('achievementsController' , [
			'achivementsService',
			achievementsController
		]);
})();