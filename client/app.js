(function () {
	'use strict';

	var AppController = function($urlRouterProvider, $locationProvider, $logProvider) {

		
		// $("button").click(function() {
		// 	$("ul.nav").show();
		// });

		// $("ul.nav li a").click(function() {
	 //        $("ul.nav").hide();
		// });

		$urlRouterProvider
		.when('/resume', [
			'$state', function($state) {
				$state.go('resume');
			}
		])
		.when('/education', [
			'$state', function($state) {
				$state.go('education');
			}
		])
		.when('/work', [
			'$state', function($state) {
				$state.go('work');
			}
		])
		.when('/projects', [
			'$state', function($state) {
				$state.go('projects');
			}
		])
		.when('/skills', [
			'$state', function($state) {
				$state.go('skills');
			}
		])
		.when('/achivements', [
			'$state', function($state) {
				$state.go('achivements');
			}
		])
		.when('/contact', [
			'$state', function($state) {
				$state.go('contact');
			}
		])
		.when('/', [
			'$state', function($state) {
				$state.go('aboutme');
			}
		])
		.otherwise('/');

		$locationProvider.html5Mode({enabled:true , requireBase: false});
	};

	angular.module('personalWebsite', [
		'ui.router',
		'ngResource',
		'ngAnimate',
		'ngSanitize'
	])

	.config([
		'$urlRouterProvider',
		'$locationProvider',
		'$logProvider',
		AppController
	]);
})();
