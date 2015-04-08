 

//站点路径 js
(function ($) {
	
	//配置样式
	var divsionClass = "gt"; //分隔符样式
	var divsionChartper = "/";//分隔符字符
	var crumbsClassPrefix = "level";//面包屑样式前缀
	
	var crumbs = function(){
		
		//判断是否启用
		if(this.attr("data-enable") == "false") return;
		
		this.addClass("crumbs");
		var paths = getNode();
		
		var divsion = "<p class='"+ divsionClass +"'>"+ divsionChartper +"</p>";
		var htmlstring = "";
		for(var i =0 ; i< paths.length ; i++){
			if(paths[i] != undefined){
				var classname = crumbsClassPrefix + (i+1);
				var href = paths[i].url;
				var name = paths[i].name;
				if(i>0){
					htmlstring  += divsion;
				}
				//若href空或者未定义就生成spna标签
				if(href =="" || href == undefined){
					htmlstring  += "<spna class='"+ classname +"'>"+ name +"</spna>";
				}
				else{
					htmlstring  += "<a class='"+ classname +"' href='"+ href +"'>"+ name +"</a>";
				}
			    
			}
		}
		 
			
		this.html(htmlstring);
	}

	var getNode = function(){
		return "21";
	}
  
	//站点地图配置
	var getNode = function(){
		 var path = window.location.pathname;
		 var nodes = getWebNodeArray(path).reverse();
		 
		 var level1,level2,level3;
		 
		 
		 //找第一级
		 var node = nodes.pop();
		 if(node != undefined){
			 for(var i =0; i<sitemap.length ; i++ )
			 {
				 if(node.indexOf(sitemap[i].path ) != -1){
					 //找到第一级元素
					 level1 = sitemap[i];
					 break;
				 }
			 }
		 } 
		//找第二级
		 var node = nodes.pop();
		 if(node != undefined && level1.item != undefined){
			 for(var i =0; i<level1.item.length ; i++ )
			 {
				 if(node.indexOf(level1.item[i].path) != -1){
					 //找到第二级元素
					 level2 = level1.item[i];
					 break;
				 }
			 }
		 }
		 
		//找第三级
		 var node = nodes.pop();
		 if(node != undefined && level2.item != undefined){
			 for(var i =0; i<level2.item.length ; i++ )
			 {
				 if(node.indexOf(level2.item[i].path) != -1){
					 //找到第二级元素
					 level3 = level2.item[i];
					 break;
				 }
			 }
		 }
		    
		return  [level1,level2,level3];
			
	}

	var getWebNodeArray = function(path){
		
		 var projectname = "ccs_web";
		 var modulesname = "modules";
		
		 var nodes = [];
		 var arr=new Array();   		   
		 arr=path.split('/');
		 var status = 0;
		 for(var i=0;i<arr.length;i++){
			 if(status==1){
				 nodes.push(arr[i]);
			 }
			 if(arr[i].indexOf(modulesname) != -1){
				 status = 1;
			 }
			 
		 }
		 return nodes;
	}
	
	
	 $.fn.crumbs = crumbs;
	 
	 
	  
	 
})(jQuery);




            










