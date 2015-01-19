/**
 * Created by antonysamy.j on 1/19/2015.
 */
var authApp=angular.module('authApp',['ui.router']);

authApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('Login',{
        resolve:{},
        url:'/',
        views:{
            '':{
                templateUrl:'../Views/Login.html',
                controller:'LoginController'
            }
        }
    }).state('Register',{
        resolve:{},
        url:'/Register',
        views:{
            '':{
                templateUrl:'../Views/Register.html',
                controller:'RegisterController'
            }
        }
    })
}]);