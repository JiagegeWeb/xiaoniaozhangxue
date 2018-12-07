$(function(){
	$(".nav .nav_title").hover(function(){
		$(this).children(".xiala").slideDown(700,"elasticOut")
		
	},function(){
		$(this).children(".xiala").css("display","none")
	
	})
})