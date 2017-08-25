(function(){
	'use strict';
	angular.module('app.home')
		.controller('HomeController', ['$scope','$window','homeService',function($scope,$window,homeService){
			//验证用户有没有登录，如果没有登录，跳转到登录页面
			var url="http://192.168.0.100/hrm/isLogined";
			var promise=homeService.isLogined(url);
			promise.then(function(res){
				if(res.data.status=="ok"){
					$scope.user=res.data.user
				}else{
					$window.location="/"
				}
			},function(res){

			})


			
		}])
})();