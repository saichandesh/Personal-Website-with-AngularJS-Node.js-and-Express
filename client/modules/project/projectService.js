(function(){
    'use strict';

    var projectService = function(apiService){
    	this.getprojectContent = function(){
    		return apiService.getprojectContent();
    	};
    };

    angular
        .module('personalWebsite')
        .service('projectService',[
        	'apiService',
            projectService
    ]);
})();