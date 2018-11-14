//前端代码 遵循mvc开发模式  将service与controller分离  整个后台  作为dao获取数据
		//品牌服务层
		app.service("brandService",function ($http){
			//读取列表数据绑定到表单中 
			this.findAll=function(){
				return $http.get('../brand/findAll.do'); 
			}
			this.findPage=function(page,size){
				return $http.get('../brand/findPage.do?page='+page +'&size='+size);
			}
			this.findOne=function(id){
				return $http.post('../brand/findOne.do?id='+id);
			}
			this.add=function(entity){
				return $http.post('../brand/add.do',entity)
			}
			this.update=function(entity){
				return $http.post('../brand/update.do',entity)
			}
			this.dele=function(ids){
				return $http.get('../brand/delete.do?ids='+ids)
				}
			this.search=function(page,rows,searchEntity){
				return $http.post('../brand/search.do?page='+page +'&size='+rows, searchEntity)
			}
			//读取品牌列表
			this.selectOptionList=function(){
				return $hppt.get('../brand/selectOptionList.do')
			}
		});