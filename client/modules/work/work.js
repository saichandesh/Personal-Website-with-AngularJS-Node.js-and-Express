(function(){
	'use strict';

	var workController = function(){

		var self = this;

		this.contentInfo="workr";
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
			workController
		]);
})();