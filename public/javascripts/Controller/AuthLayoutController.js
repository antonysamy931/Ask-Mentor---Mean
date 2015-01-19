/**
 * Created by antonysamy.j on 1/19/2015.
 */
authApp.controller('AuthLayoutController',['$state','$scope','$window',function($state,$scope,$window){
    var onLoad=function(){
        $('.bg-black').css('height',$window.innerHeight)
    };
    onLoad();

}]);

$(window).resize(function(){
    $('.bg-black').css('height',window.innerHeight)
});