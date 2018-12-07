$(function(){
	$(".header").load("header.html")
	$(".footer").load("footer.html")
})


$(".jiachang").animate({
	"width": 1130
})
$(".bi2").click(function() {
	$(".jiachang").animate({
		"width": 120
	},function(){
		$(".jiachang").animate({"width":1130})
	})
})

//global
var global=global||{}  //定义全局变量
global.loadStart=0  //控制加载次数
loadArticleList();   //我们让他点击之前先执行一遍  如果不执行的话当我们点击第一次的时候会在原来就有的地方刷新
function loadArticleList(){
	//判断是不是第一次加载
	if(global.loadStart==0){
		//如果是第一次加载
		$("#articleList").html("") //清空之前页面已有的
	}    


//2.请求数据
var result = listData['listData0'+global.loadStart]  //先拿到数据 这里是第几组
var list=result.data.list  //拿到list的数据
 
 //判断数据存不存在
 if(!list||!list.length){
	 //如果数据不存在
	$("#articleList").html("您请求的数据不存在")
 }else{
	 //如果数据存在   我们就要开始添加数据
	 for(var i=0;i<list.length;i++){
		 var htmlModel=$('#itemHtml').html()          //将数据添加到模板中
		 htmlModel=htmlModel.replace('articleId',list[i].sysId)
		 htmlModel=htmlModel.replace('img/list_img01.jpg',list[i].coverImg)
		 htmlModel=htmlModel.replace('$artcleTitle$',list[i].title)
		 htmlModel=htmlModel.replace('$updateTime$',list[i].creatAt)
		 htmlModel=htmlModel.replace('$describe$',list[i].describe)
		 //最后将模板中的数据添加到我们的盒子中
		 $('#articleList').append(htmlModel)
	 }
	 
 }
 
 global.loadStart++;   //加载次数增加
 
 
 //result.data.count  一共多少条数据
 //result.data.pageSize   每次加载，需要加载几条  
 //二者相除，进行上下取整  取得需要加载几次
 global.loadCount=Math.ceil(result.data.count/result.data.pageSize)  
 
 
 if(global.loadStart>=global.loadCount){
	 console.log(1)
	 $('.list_xiala .img').attr('src','img/list_gomore_bg_nomore.jpg')
	 $('.list_xiala_anniu').fadeTo(200,0)
	 
 }
 }
 $('.list_xiala_anniu').click(function(){
	 loadArticleList()
 })
 
 $(".box_list").delegate(".box_list_item","click",function(){
	 var articleId=$(this).attr("articleId")
	 window.open('article.html?news=xiaoniaoNews'+articleId)
 })
 


