(function (){
	'use strict';
	
	var abooutmeController = function($rootScope,$state){
		var self = this;
		

		this.init = function(){
			$rootScope.active='about'
				$rootScope.activation = function(title){
				console.log(title);
				$rootScope.active=title;
			};

		
			this.contentInfo = "Seeking Full Time Opportunities from May'17 | Master's in Computer Science in University of Central Florida";
		

		};

		$rootScope.modalSetup = function(content){
				if(content == 'resume'){
					$rootScope.modalTitle = 'RESUME';
					$rootScope.modalPath = '../../assets/certs/sai_chandesh_resume.pdf';
				}
				if(content == 'achivement'){
					$rootScope.modalTitle = 'Tata Consultancy Services Limited - Certificate of Appreciation';
					$rootScope.modalPath = './../assets/certs/tcs.pdf';
				}

			};

		this.jump = function(){
				var objControl=document.getElementById("abouts");
				objControl.scrollTop = objControl.offsetTop;
		}

		this.hire = function(){
			$state.go("contact");
		};

		this.init();

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
		'$state',
		abooutmeController
		]);
})();