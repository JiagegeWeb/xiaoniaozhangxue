 $(function(){
 	$(".header").load("header.html")
	 $(".footer").load("footer.html")
 })

var index=0
$(".prve").click(function(){
	index++;
	if(index>$(".banner1").length-1){
		index=0
	}
	$(".banner1").eq(index).addClass("banner_active")
	$(".banner1").eq(index).siblings().removeClass("banner_active")
	$(".middle_nei>span").eq(index).addClass("lanse")
	$(".middle_nei>span").eq(index).siblings().removeClass("lanse")
	if(index==0){
		$(".banner01>div").children(".ban1_tu1").addClass("fadeInLeft")
		$(".banner01>div").children(".ban1_tu3").addClass("bounceInRight")
		$(".banner01>div").children(".ban1_tu2").addClass("fadeIn")
	}
	if(index==1){
		$(".banner02>div").children(".ban2_tu1").addClass("fadeInLeft")
		$(".banner02>div").children(".ban2_tu3").addClass("bounceInRight")
		$(".banner02>div").children(".ban2_tu2").addClass("fadeIn")
	}
	if(index==2){
		$(".banner03>div").children(".ban3_tu1").addClass("fadeInLeft")
		$(".banner03>div").children(".ban3_tu3").addClass("bounceInRight")
		$(".banner03>div").children(".ban3_tu2").addClass("fadeIn")
	}
})
$(".next").click(function(){
	index--;
	if(index<0){
		index=$(".banner1").length-1
	}
	$(".banner1").eq(index).addClass("banner_active")
	$(".banner1").eq(index).siblings().removeClass("banner_active")
	$(".middle_nei>span").eq(index).addClass("lanse")
	$(".middle_nei>span").eq(index).siblings().removeClass("lanse")
	if(index==0){
		$(".banner01>div").children(".ban1_tu1").addClass("fadeInLeft")
		$(".banner01>div").children(".ban1_tu3").addClass("bounceInRight")
		$(".banner01>div").children(".ban1_tu2").addClass("fadeIn")
	}
	if(index==1){
		$(".banner02>div").children(".ban2_tu1").addClass("fadeInLeft")
		$(".banner02>div").children(".ban2_tu3").addClass("bounceInRight")
		$(".banner02>div").children(".ban2_tu2").addClass("fadeIn")
	}
	if(index==2){
		$(".banner03>div").children(".ban3_tu1").addClass("fadeInLeft")
		$(".banner03>div").children(".ban3_tu3").addClass("bounceInRight")
		$(".banner03>div").children(".ban3_tu2").addClass("fadeIn")
	}
})
$(".middle_nei>span").click(function(){
	
	$(this).addClass("lanse").siblings().removeClass("lanse")
	$(".banner1").eq($(this).index()).addClass("banner_active").siblings().removeClass("banner_active")
	if($(this).index()==0){
		$(".banner01>div").children(".ban1_tu1").addClass("fadeInLeft")
		$(".banner01>div").children(".ban1_tu3").addClass("bounceInRight")
		$(".banner01>div").children(".ban1_tu2").addClass("fadeIn")
	}
	if($(this).index()==1){
		$(".banner02>div").children(".ban2_tu1").addClass("fadeInLeft")
		$(".banner02>div").children(".ban2_tu3").addClass("bounceInRight")
		$(".banner02>div").children(".ban2_tu2").addClass("fadeIn")
	}
	if($(this).index()==2){
		$(".banner03>div").children(".ban3_tu1").addClass("fadeInLeft")
		$(".banner03>div").children(".ban3_tu3").addClass("bounceInRight")
		$(".banner03>div").children(".ban3_tu2").addClass("fadeIn")
	}
})



//主要产品  (错误)
// function anim(ele,className){
// 	ele.eq(oIndex).removeClass("animated fadeInLeft fadeInRight")
// 	.addClass('animated')
// 	.addClass('className')
// }
// var oPrve = $(".chanpin_content").find(".chanpin_prve")
// var oNext = $(".chanpin_content").find(".chanpin_next")
// var oList = $(".chanpin_content").find(".xiao_dian2")
// var oImg = $(".center1").children(".center_left")
// var oTxt = $(".center1").children(".center_right")
// var oIndex = 0
// oNext.click(function(){
// 	oIndex++;
// 	if(oIndex>$(".chanpin_content_center .center1").length-1){
// 		oIndex = 0
// 	}
// 	oList.children("i").removeClass('xiao_dian_active')
// 	oList.eq(oIndex).addClass("active")
// 	anim(oImg,"fadeInRight");
// 	anim(oTxt,"fadeInRight");
// 	$(".chanpin_content_center .center1").removeClass("center1_active").eq(oIndex).addClass("center1_active")
// })
// oPrve.click(function(){
// 	oIndex++;
// 	if(oIndex<0){
// 		oIndex = $(".chanpin_content_center .center1").length-1
// 	}
// 	oList.children("i").removeClass('xiao_dian_active')
// 	oList.eq(oIndex).addClass("active")
// 	anim(oImg,"fadeInLeft");
// 	anim(oTxt,"fadeInLeft");
// 	$(".chanpin_content_center .center1").removeClass("center1_active").eq(oIndex).addClass("center1_active")
// })

//主要产品
$(function(){
	var chanpinIndex=0
	$(".chanpin_prve").click(function(){
		
		chanpinIndex--;
		if(chanpinIndex<0){
			chanpinIndex=$(".center1").length-1
		}
		$()
		$(".center1").eq(chanpinIndex).addClass("center1_active")
		$(".center1").eq(chanpinIndex).siblings().removeClass("center1_active")
		
		$(".left_xiaodian").eq(chanpinIndex).children("i").addClass("xiao_dian_active")
		$(".left_xiaodian").eq(chanpinIndex).siblings().children("i").removeClass("xiao_dian_active")
		
// 		$(".chanpin_content_center .center1").eq(chanpinIndex).addClass("animated fadeInLeft")
// 		$(".chanpin_content_center .center1").eq(chanpinIndex).siblings().removeClass("animated fadeInLeft")
		$(".chanpin_content_center .center1").eq(chanpinIndex).siblings().find(".left_img").removeClass("fadeInLeft")
		$(".chanpin_content_center .center1").eq(chanpinIndex).find(".left_img").addClass("fadeInLeft")
		$(".chanpin_content_center .center1").eq(chanpinIndex).siblings().find(".right_animated").removeClass("fadeInLeft")
		$(".chanpin_content_center .center1").eq(chanpinIndex).find(".right_animated").addClass("fadeInLeft")
		
	})

	$(".chanpin_next").click(function(){
		// var chanpinIndex=chanpinIndex
		chanpinIndex++;
		if(chanpinIndex>$(".center1").length-1){
			chanpinIndex=0
		}
		
		$(".center1").eq(chanpinIndex).addClass("center1_active")
		$(".center1").eq(chanpinIndex).siblings().removeClass("center1_active")
		$(".left_xiaodian").eq(chanpinIndex).children("i").addClass("xiao_dian_active")
		$(".left_xiaodian").eq(chanpinIndex).siblings().children("i").removeClass("xiao_dian_active")
// 		$(".chanpin_content_center .center1").eq(chanpinIndex).siblings().removeClass("animated fadeInRight")
//         $(".chanpin_content_center .center1").eq(chanpinIndex).addClass("animated fadeInRight")
		$(".chanpin_content_center .center1").eq(chanpinIndex).siblings().find(".left_img").removeClass("fadeInRight")
		$(".chanpin_content_center .center1").eq(chanpinIndex).find(".left_img").addClass("fadeInRight")
		$(".chanpin_content_center .center1").eq(chanpinIndex).siblings().find(".right_animated").removeClass("fadeInRight")
		$(".chanpin_content_center .center1").eq(chanpinIndex).find(".right_animated").addClass("fadeInRight")
		
	})
	
	
	
	
	
	
	$(".chanpin_content").find(".left_xiaodian").click(function(){
		// var filter=""
		if($(this).index(".left_xiaodian")>chanpinIndex){
			$(".chanpin_content_center .center1").eq($(this).index()).find(".left_img").addClass("fadeInRight")
			$(".chanpin_content_center .center1").eq($(this).index()).find(".right_animated").addClass("fadeInRight")
			// index=$(this).index(".left_xiaodian")
		}else{
			$(".chanpin_content_center .center1").eq($(this).index()).find(".left_img").addClass("fadeInLeft")
			$(".chanpin_content_center .center1").eq($(this).index()).find(".right_animated").addClass("fadeInLeft")
		}
		$(this).siblings().children("i").removeClass("xiao_dian_active")
		$(this).children("i").addClass("xiao_dian_active")
		
		$(".center1").eq($(this).index()).siblings().removeClass("center1_active")
		$(".center1").eq($(this).index()).addClass("center1_active")
	})
})








//业务范围
var temp=true
$(".chahao_a").click(function(){
	if(temp){
		$(this).addClass("chahao_a_active")
		$(this).parent(".con1_top").siblings().slideDown()
	}else{
		
		$(this).removeClass("chahao_a_active")
		$(this).parent(".con1_top").siblings().slideUp()
	}
	temp=!temp
})
$(".center_yuan").click(function(){
	if(temp){
		$(this).siblings(".chahao_a").addClass("chahao_a_active")
		$(this).parent(".con1_top").siblings().slideDown()
	}else{
		
		$(this).siblings(".chahao_a").removeClass("chahao_a_active")
		$(this).parent(".con1_top").siblings().slideUp()
	}
	temp=!temp
})



var teamIndex=0
var teamTimer=null
var teamTindex=0
var team_lanse=0
$(".tuandui_lb_big .lb_a").first().clone(true).appendTo(".tuandui_lb_big")
function tab(){
	teamTimer=setInterval(function(){
		$(".tuandui_lb_big").stop().animate({"left":-teamIndex*1130+30})
		team_lanse++
		teamIndex++;
		teamTindex++;
		if(team_lanse>$(".lb_a").length-1){
			team_lanse=0
		}
		if(teamIndex>$(".lb_a").length-1){
			teamIndex=1
			$(".tuandui_lb_big").css("left",0).stop().animate({"left":-1130})
		}
		if(teamIndex==$(".lb_a").length-1){
			teamTindex=0
		}
		$(".team_middle span").eq(team_lanse).addClass("lanse").siblings().removeClass("lanse")
		$(".tuandui_lb_big").stop().animate({"left":(-teamIndex*1130)+1300},function(){
			$(".tuandui_lb_big").stop().animate({"left":-teamIndex*1130})
		})
	},2000)
}
tab();
$(".team_prve").click(function(){
	clearInterval(teamTimer)
	team_lanse++
	teamIndex++;
	teamTindex++;
	if(team_lanse>$(".lb_a").length-1){
		team_lanse=0
	}
	if(teamIndex>$(".lb_a").length-1){
		teamIndex=1
		$(".tuandui_lb_big").css("left",0).stop().animate({"left":-1130})
	}
	if(teamIndex==$(".lb_a").length-1){
		teamTindex=0
	}
	$(".team_middle span").eq(team_lanse).addClass("lanse").siblings().removeClass("lanse")
	$(".tuandui_lb_big").stop().animate({"left":(-teamIndex*1130)+1300},function(){
			$(".tuandui_lb_big").stop().animate({"left":-teamIndex*1130})
		})
	tab();
})
$(".team_next").click(function(){
	clearInterval(teamTimer)
	teamIndex--;
	teamTindex--;
	team_lanse--;
	if(teamIndex<0){
		teamIndex=$(".lb_a").length-2
		$(".tuandui_lb_big").css("left",-2260).stop().animate({"left":-1130})
	}
	if(teamIndex<0){
		teamTindex=3
	}
	if(team_lanse<0){
		team_lanse=$(".lb_a").length-1
	}
	$(".team_middle span").eq(team_lanse).addClass("lanse").siblings().removeClass("lanse")
	$(".tuandui_lb_big").stop().animate({"left":(-teamIndex*1130)-1300},function(){
		$(".tuandui_lb_big").stop().animate({"left":-teamIndex*1130})
	})
	tab();
})

$(window).on("scroll",function(){				
				if($(window).scrollTop()>500){		
					$(".fanhui").fadeIn(600)
				}else if($(window).scrollTop()<500){
					$(".fanhui").fadeOut(600)
				}
			})
			$(".dingbu").click(function(){
				$('html,body').animate({scrollTop:0})
			})