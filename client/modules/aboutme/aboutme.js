(function (){
	'use strict';
	
	var abooutmeController = function(){
		var self = this;

		this.contentInfo = "Seeking Full Time Opportunities from May'17 | Master's in Computer Science in University of Central Florida";
		
		this.jump = function(){
			var objControl=document.getElementById("about");
			objControl.scrollTop = objControl.offsetTop;
		}
	}


	angular
	.module('personalWebsite')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
		.state('aboutme', {
			url: '/aboutme',
			templateUrl: './modules/aboutme/aboutme.html',
			controllerAs: 'aboutme',
			controller: 'abooutmeController'
		});
	}])
	.controller('abooutmeController', [
		abooutmeController
		]);
})();