$(".yinyue span").hover(function(){
	$(this).addClass("span_active rubberBand")
},function(){
	$(this).removeClass('span_active rubberBand')
})
$(".yinyue span").click(function(){
	var index=$(this).index()
	$(this).append('<audio src="img/sound0'+index+'.mp3" autoplay></audio>')
	// $("audio")[index].play()
	// $(this).children("audio").play()
})