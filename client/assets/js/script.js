!function(){"use strict";var t=function(t,e,o){t.when("/resume",["$state",function(t){t.go("resume")}]).when("/education",["$state",function(t){t.go("education")}]).when("/work",["$state",function(t){t.go("work")}]).when("/projects",["$state",function(t){t.go("projects")}]).when("/skills",["$state",function(t){t.go("skills")}]).when("/achivements",["$state",function(t){t.go("achivements")}]).when("/contact",["$state",function(t){t.go("contact")}]).when("/",["$state",function(t){t.go("aboutme")}]).otherwise("/")};angular.module("personalWebsite",["ui.router","ngResource","ngAnimate"]).config(["$urlRouterProvider","$locationProvider","$logProvider",t])}(),function(){"use strict";var t=function(){this.contentInfo="Seeking Full Time Opportunities from May'17 | Master's in Computer Science in University of Central Florida"};angular.module("personalWebsite").config(["$stateProvider",function(t){t.state("aboutme",{url:"/aboutme",templateUrl:"modules/aboutme/aboutme.html",controllerAs:"aboutme",controller:"abooutmeController"})}]).controller("abooutmeController",[t])}();