$(function(){
	$(".content-two").delay(6000).slideUp()
	$(".top1").delay(2500).animate({"top":0})
	$(".top2_1").delay(2500).animate({"top":420,"opacity":1},1000)
	$(".top2_2").delay(3000).animate({"top":470,"opacity":1},1000)
	$(".top2_3").delay(3500).animate({"top":500,"opacity":1},1000)
	$(".top2_4").delay(4000).animate({"top":560,"opacity":1},1000)
	$(".top2_5").delay(4500).animate({"top":600,"opacity":1},1000)
	$(".content-two").dblclick(function(){
		$(".content-two").hide()
	})
})
$(function() {	
				var height = $(window).height();
				var width = $(window).width();
				$(".warp").height(height);
				$(".warp").width(width);
				$(window).resize(function() {
						var height = $(window).height();
						var width = $(window).width();
						$(".warp").height(height);
						$(".warp").width(width);
			})		   
							
					var index = 0;
					var isRuning = false;
					
					$(".wrap_list").click(function(){
						$(this).siblings().children().removeClass("nav_active")
						$(this).children().addClass("nav_active")
						// $(this).addClass("nav_active").parent().siblings().children().removeClass("nav_active")
						index=$(this).index()+1
						$(".box").animate({top:index*-100+"%"})
						if($(this).index()==3 || $(this).index()==4){
							$(".nav_wrap").find(".wrap_list_item").eq(3).addClass("nav_active");
							$(".nav_wrap").find(".wrap_list_item").eq(4).addClass("nav_active");
						}
						console.log(index)
					})
					function scroll(){
						if(index==0){
							$(".nav_wrap").find(".wrap_list_item").removeClass("nav_active")
							$(".nav_wrap").find(".wrap_list_item").eq(0).addClass("nav_active");
						}else if(index>0 && index<4){
							$(".nav_wrap").find(".wrap_list_item").removeClass("nav_active");
							$(".nav_wrap").find(".wrap_list_item").eq(index-1).addClass("nav_active");
						}
						if(index==4){
							$(".nav_wrap").find(".wrap_list_item").removeClass("nav_active");
							$(".nav_wrap").find(".wrap_list_item").eq(index-1).addClass("nav_active");
							$(".nav_wrap").find(".wrap_list_item").eq(index).addClass("nav_active");
						}
					}
					function scrollUp() {
						if (!isRuning) {
							isRuning=true					
						setTimeout(function () {
							isRuning = false;
						},1000)
						if(index > 0){
							index--;
						}
						
						$(".box").animate({top:index*-100+"%"})
						}
					}
					function scrollDown() {
						if(!isRuning){
							isRuning=true
						    setTimeout(function () {
						    	isRuning = false;
						    },1000)	
						
						if(index < $(".content_one").length-1){
							index++;
						}
						
						
						
						$(".box").animate({top:index*-100+"%"});
// 						$(".wrap_list").eq(index).children(".wrap_list_item").addClass(".nav_active")
// 						$(".wrap_list").eq(index).siblings().children(".wrap_list_item").removeClass(".nav_active")
						
						}
					}
					
				
				function mouseWheel(ev) {
					if (ev.wheelDelta) {
						if (ev.wheelDelta > 0) {
							scroll()
							scrollUp()
						} else {
							scroll()
							scrollDown()
						}
						console.log(ev.wheelDelta)
					} else {
						if (ev.detail > 0) {
							scroll()
							scrollDown()
						} else {
							scroll()
							scrollUp()
						}
						// console.log(ev.detail)
					}
				}
				window.onmousewheel=mouseWheel
				window.addEventListener("DOMMouseScroll", mouseWheel)
			})

var buttonIndex=0
var button=true
var $width=$(".two_lb_list").width()
$(".lb_prve").click(function(){
	buttonIndex--;
	if(buttonIndex<=0){
		// button=false
		
		buttonIndex=0
		$(this).addClass("lb_opacity")
		$(".two_lb_big").animate({"left":0})
	}else{
		// button=true
		$(this).removeClass("lb_opacity")
		$(".lb_next").removeClass("lb_opacity")
		$(".two_lb_big").animate({"left":-(buttonIndex*$width)})
	}
})
$(".lb_next").click(function(){
	buttonIndex++;
	
	// console.log(buttonIndex)
	if(buttonIndex>$(".two_lb_list").length-1){
		
		// button=false
		buttonIndex=2
		$(this).addClass("lb_opacity")
		$(this).addClass("lb_opacity")
		$(".two_lb_big").animate({"right":0})
	}else{
		$(this).removeClass("lb_opacity")
		$(".lb_prve").removeClass("lb_opacity")
		// button=true
		$(".two_lb_big").animate({"left":-(buttonIndex*$width)})
	}
})

setInterval(function(){
	$(".liang").toggleClass("huxideng_active")
},2000)

var chang=true
$(".fore_you").click(function(){
	
		$(this).children(".bianse").animate({"left":0})
			$(this).siblings(".fore_zuo").children(".bianse").animate({"left":102})
		
		$('.fore_lb_big').animate({"left":-910},500)
		
	
})
$(".fore_zuo").click(function(){
	
		$(this).children(".bianse").animate({"left":0})
			$(this).siblings(".fore_you").children(".bianse").animate({"left":-102})
			$('.fore_lb_big').animate({"left":0},500)
	
	
})

