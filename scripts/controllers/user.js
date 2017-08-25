(function(){
	'use strict';
	angular.module('app.home')
		.controller('UserController', ['$scope','$window','userService', function($scope,$window,userService){
			//返回从服务器得到的数据
			$scope.loginname='';
			$scope.password='';
			$scope.status='';

			var url = "http://192.168.0.100/hrm/user/list";
			var params={
				pageIndex:1,
				offset:50
			}
			var promise=userService.getList(url,params);
			promise.then(function(res){
				$scope.users=res.data.users;
			},function(res){})

			//删除信息
			$scope.deleteUser=function(e){
				var url="http://192.168.0.100/hrm/user/delete";
				var params={
					id:e
				}
				var promise=userService.getList(url,params);
				promise.then(function(res){
					var url = "http://192.168.0.100/hrm/user/list";
					var params={
						pageIndex:1,
						offset:50
					}
					var promise=userService.getList(url,params);
					promise.then(function(res){
						$scope.users=res.data.users;
					},function(res){})
						},function(res){})
			}
			//修改信息
			$scope.edit=function(id,loginname,password,status){
				return $scope.datas={id:id,loginname:loginname,password:password,status:status}
			}
			//保存修改信息
			$scope.saveEdit=function(){
				var url="http://192.168.0.100/hrm/user/edit";
				var params={
					id:$scope.datas.id,
					loginname:$scope.datas.loginname,
					password:$scope.datas.password,
					status:$scope.datas.status
				}
				console.log(params)
				var promise=userService.getList(url,params);
				promise.then(function(res){
					var url = "http://192.168.0.100/hrm/user/list";
					var params={
						pageIndex:1,
						offset:50
					}
					var promise=userService.getList(url,params);
					promise.then(function(res){
						$scope.users=res.data.users;
						console.log($scope.users)
					},function(res){})
						},function(res){})
			}
			//添加信息信息
			$scope.add=function(){
				var url="http://192.168.0.100/hrm/user/save";
				var params={
					id:$scope.datas.id,
					loginname:$scope.datas.loginname,
					password:$scope.datas.password,
					status:$scope.datas.status
				}
				console.log(params)
				var promise=userService.getList(url,params);
				promise.then(function(res){
					var url = "http://192.168.0.100/hrm/user/list";
					var params={
						pageIndex:1,
						offset:50
					}
					var promise=userService.getList(url,params);
					promise.then(function(res){
						$scope.users=res.data.users;
						$scope.datas.loginname='';
						$scope.datas.password='';
						$scope.datas.status='';
					},function(res){})
				},function(res){})
			}
			//翻页
			$scope.lastPage=function(){
				var url = "http://192.168.0.100/hrm/user/list";
				var params={
					pageIndex:1,
					offset:8
				}
				var promise=userService.getList(url,params);
				promise.then(function(res){
					$scope.users=res.data.users;
				},function(res){})
			}
			$scope.nextPage=function(){
				var url = "http://192.168.0.100/hrm/user/list";
				var params={
					pageIndex:1,
					offset:5
				}
				var promise=userService.getList(url,params);
				promise.then(function(res){
					$scope.users=res.data.users;
				},function(res){})
			}
			//查询信息
			$scope.search=function(){
				var url="http://192.168.0.100/hrm/user/getById";
				var params={
					id:$scope.id
				}
				var promise=userService.getList(url,params);
				promise.then(function(res){
					$scope.users=[res.data.user];
				},function(res){})
			}
		}])
})()