/*下拉菜单*/
$('.header-nav li, .header-nav dd').each(function(){
	$(this).mouseenter(function(){
		if(this.nodeName=="DD"){
	$(this).children("a").addClass("navDdCur");
	}
	$(this).children(".navDl").show();
	})
	$(this).mouseleave(function(){
	if(this.nodeName=="DD"){
	$(this).children("a").removeClass("navDdCur");
	}
	$(this).children(".navDl").hide();
	})
});
/*淡入淡出*/
$("#slider").mouseenter(function(){
	$(".slider-left").show();
	$(".slider-right").show();
	clearInterval(setInterValFun);
})
$("#slider").mouseleave(function(){
	$(".slider-left").hide();
	$(".slider-right").hide();
	setInterValFun=setInterval(function(){
	rightBtn.click();
},3000)	
})
var liNodes=$("#slider .slider-img li");
var spanNodes=$("#slider .sldier-btn span");
var setInterValFun=null;
var leftBtn=$("#slider .slider-left");
var rightBtn=$("#slider .slider-right");
function sliderbtn(){
	spanNodes.mouseenter(function(){
	if($(this).hasClass("current")){
		return;
	}
	clearInterval(setInterValFun);
	var curPos=$(this).index();
	var oldPos=$("#slider .sldier-btn .current").index();
	$(".slider-img li").stop(false,true);//第一个false表示不清除队列，第二个true表示立刻完成动画
	spanNodes.eq(curPos).addClass("current");
	spanNodes.eq(oldPos).removeClass("current");
	liNodes.eq(curPos).fadeIn();
	liNodes.eq(oldPos).fadeOut();
});
}
function sliderLeft(){
	leftBtn.click(function(){
			var lastPos=spanNodes.last().index();
			var oldPos=$("#slider .sldier-btn .current").index();
			curPos=oldPos!=0?oldPos-1:lastPos;
			spanNodes.eq(curPos).addClass("current");
			spanNodes.eq(oldPos).removeClass("current");
			liNodes.eq(curPos).fadeIn("slow");
			liNodes.eq(oldPos).fadeOut("slow");
	})
}
function sliderRight(){
	rightBtn.click(function(){
			var firstPos=spanNodes.first().index();
			var lastPos=spanNodes.last().index();
			var oldPos=$("#slider .sldier-btn .current").index();
			curPos=oldPos!=lastPos?oldPos+1:firstPos;
			spanNodes.eq(curPos).addClass("current");
			spanNodes.eq(oldPos).removeClass("current");
			liNodes.eq(curPos).fadeIn("slow");
			liNodes.eq(oldPos).fadeOut("slow");
	})
}
sliderbtn();
sliderLeft();
sliderRight();
setInterValFun=setInterval(function(){
	rightBtn.click();
},3000)
/*四个球*/
$(".circle_main li").mouseenter(function(){
	if($(this).hasClass("circle_cur")){
		return;
	}
	var oldPos=$(".circle_cur").index();
	//console.log(oldPos);
	$(this).addClass("circle_cur").stop().animate({width:"502px"},300);
	$(".circle_main li").eq(oldPos).removeClass("circle_cur").stop().animate({width:"167px"},300);
});
/*图放大*/
$("#about .a").mouseenter(function(){
	//console.log($("#about .a"));
	$(this).find("img").stop().animate({width:"580px",height:"285px"},300);
	$(this).find("span").stop().animate({top:0},300);
	
})
$("#about .a").mouseleave(function(){
	//console.log($("#about .a"));
	$(this).find("img").stop().animate({width:"491px",height:"241px"},300);
	$(this).find("span").stop().animate({top:"241px"},300);
	
})
/*回到顶部*/
$("#toTop").click(function(){
	$("html,body").animate({scrollTop:0},300);
})
$(window).scroll(function(){
	var scrollTop=$('html').scrollTop()+$('body').scrollTop();//得到网页时时的滚动位置（html为了兼容IE和火狐）
	var winHeight=$(window).height();//网页可视高度
	var webHeight=$('html').outerHeight();//网页实际高度
	if(scrollTop>winHeight){
		$("#toTop").fadeIn();
	}
	else{
		$("#toTop").fadeOut();
	}
})
$(".online .online-toTop").click(function(){
	$("html,body").animate({scrollTop:0},300);
})
/*关于切换*/
$("#about .right-btn,#copration .right-btn").mouseenter(function(){
	$(this).addClass("btn-cur");
})
$("#about .right-btn").click(function(){
		var lastLi=$("#about .aboutUl li:last");
		$("#about .aboutUl").prepend(lastLi);

	})
$("#about .left-btn ,#copration .left-btn").mouseenter(function(){
	$(this).addClass("btn-cur");
})
$("#about .left-btn").click(function(){
		var firstLi=$("#about .aboutUl li:first");
		$("#about .aboutUl").append(firstLi);
	})
$("#about .right-btn,#about .left-btn,#copration .right-btn,#copration .left-btn").mouseleave(function(){
	$(this).removeClass("btn-cur");
	
})
/*合作切换*/
var liW=191;
$("#copration .right-btn").click(function(){
	$("#copration .copration-list li:first").animate({marginLeft:-liW+"px"},200,function(){
	$("#copration .copration-list").append($(this));
	$(this).css('margin-left','0px');
	});
	
})
$("#copration .left-btn").click(function(){
	$("#copration .copration-list li:last").css("margin-left",-liW+"px");
	$("#copration .copration-list").prepend($("#copration .copration-list li:last"));
	$("#copration .copration-list li:first").animate({marginLeft:"0px"},200);
})
/*筛选*/
$(".listNav li").click(function(){
	$(this).addClass("cur").siblings(".cur").removeClass("cur");
	var className=$(this).attr("data");
	if(className=="*"){
		$("#list ul").children(className).slideDown();
	}
	else{
		$("#list ul").children(className).slideDown();
		$("#list ul").children(className).siblings("li:not("+className+")").slideUp();
	}
});
/*内容页*/
$(".aboutList li").click(function(){
	var curPos=$(this).index();
	var oldPos=$(".aboutList .aboutCur").index();
	$(".aboutList li").eq(curPos).addClass("aboutCur").siblings(".aboutCur").removeClass("aboutCur");
})