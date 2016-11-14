(function (){
	'use strict';
	
	var abooutmeController = function($rootScope){
		var self = this;
		$rootScope.active='about'
		$rootScope.activation = function(title){
			$rootScope.active=title;
		};

		this.contentInfo = "Seeking Full Time Opportunities from May'17 | Master's in Computer Science in University of Central Florida";
		
		this.jump = function(){
			console.log("hint");
			var objControl=document.getElementById("abouts");
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
		'$rootScope',
		abooutmeController
		]);
})();