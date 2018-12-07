$(function(){
	$(".header").load("header.html")
	$(".footer").load("footer.html")
})


	$(".article_bianchang").animate({
		"width": 780
	})
	$(".bi3").click(function() {
		$(".article_bianchang").animate({
			"width": 120
		},function(){
			$(".article_bianchang").animate({"width":780})
		})
	})
	
var news = getUrlParams('news');
var data = articleData[news].data;
$(".sup-tit").html(data.typeTitle);
$(".sub-tit").html(data.typeEntitle);
$(".article_title").html(data.title);
$(".date").html(data.updateAt);
$('.author').html(data.updateByFullName);
$(".big-img").attr('src',data.coverImg);
$(".article-txt").html(data.content);


function getUrlParams(name){  //name即为news
//获取页面URL传过来的参数article.html?news=xiaoniaoNews1&news=111&news=222


// (^|&)  是否以&开头    [^&]*)是否以&结尾
var reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)')
var r = window.location.search.substr(1).match(reg)
//  news=xiaoniaoNews1  ''   xiaoniaoNews1  ''
	if(r!=null){
		return r[2]
	}else{
		return ''
	}
}


$(function(){
	var temp=["娘娘威武","皇上万岁，万万岁","再点一下试试~","爱死你啦，MUA~"]
	var timers=null
	// var nub=true
	$(".like-wrap").one("click",function(){
		clearInterval(timers)
		
			timers=setTimeout(function(){
				var step=parseInt(Math.random()*5)
				$(".like_tips").html(temp[step])
			},100)
			$(".like_tips").addClass("bounceInDown").animate({"opacity":1})
			.delay(1500).animate({"left":350},800,function(){
				$(".like_tips").animate({"opacity":0,"left":-300})
			})
			$(".like").addClass("lick_active")
		
		
		
		
	})
	
})
