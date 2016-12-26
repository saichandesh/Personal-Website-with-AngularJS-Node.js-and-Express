(function(){
	'use strict';

	var apiService = function(webService,$q){
		var APIManager = {};

		APIManager.getWorkContent = function(){
			var deffered = $q.defer();

			var networkConfig = {
				'url': 'work',
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};

		APIManager.getCetificateContent = function(){

			var deffered = $q.defer();

			var networkConfig = {
				'url' : 'certificate'
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};

		APIManager.getResumeContent = function(){

			var deffered = $q.defer();

			var networkConfig = {
				'url' : 'resume'
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};


		APIManager.getprojectContent = function(){

			var deffered = $q.defer();

			var networkConfig = {
				'url' : 'project'
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};

		APIManager.getContactContent = function(){

			var deffered = $q.defer();

			var networkConfig = {
				'url' : 'contact'
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};

		APIManager.getskillContent = function(){

			var deffered = $q.defer();

			var networkConfig = {
				'url' : 'skill'
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};

		APIManager.geteducationContent = function(){

			var deffered = $q.defer();

			var networkConfig = {
				'url' : 'education'
			};

			webService.doGetAll(networkConfig).then(function(resp){
				deffered.resolve(resp);
			},function(err){
				deffered.reject(err);
			});

			return deffered.promise;
		};



		return APIManager;
	};

	angular
		.module('personalWebsite')
		.factory('apiService',[
			'webService',
			'$q',
			apiService
	]);
})();