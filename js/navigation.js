$(function() {
	// app二维码悬浮展示
	$("#app").mouseenter(function() {
		$(".app_OR").slideDown(200);
	}).mouseout(function() {
		$(".app_OR").slideUp(20);
	});
	
    //购物车悬浮展示 购物车改变颜色
	$(".car").hover(function(){
		$(".car").css("background-color","#fff");
		$(".car span").css({"color":"rgb(255,103,0)"});
		$(".icon_car").css({"color":"rgb(255,103,0)"});
		$(".car_sp").slideDown(200);
	},function(){
		$(".car").css("background-color","rgb(66, 66, 66)");
		$(".car span").css({"color":"rgb(172, 176, 176)"});
		$(".icon_car").css({"color":"rgb(172, 176, 176)"});
		$(".car_sp").slideUp(200);
	},1000);
	
	// 小米log和home log 切换
    $("#sp_navigation_log").hover(function(){
		$("#log_img").animate({
			left:-49,
		},300);
		$("#home_img").animate({
			left:4,
		},300);
	},function(){
		$("#log_img").animate({
			left:0,
		},300);
		$("#home_img").animate({
			left:55,
		},300);
	});
	// 搜索样式
	$(".icon_search").hover(function(){
		$(".icon-sousuo").css({
			"color":"#fff",
			"background-color":"rgb(255,103,0)",
		});
	},function(){
		$(".icon-sousuo").css({
			"color":"rgb(97,97,97)",
			"background-color":"rgb(225,225,225)",
		});
	});
	//搜索框聚焦事件
	 $(".search input").focus(function(){
		 $("#input_search").css({"border":"0.0625rem solid rgb(255,103,0)","outline":"none"});
		 $(".icon-sousuo").css({"border":"0.0625rem solid rgb(255,103,0)","border-left":"none"} );
		 $(".search_pull-down").show();
		 clearInterval(setl_input);
	 }).focusout(function(){
		 $("#input_search").css({"border":"0.0625rem solid rgb(97,97,97)"});
		 $(".icon-sousuo").css({"border":"0.0625rem solid rgb(97,97,97)","border-left":"none"} );
		 $(".search_pull-down").hide();
		 setl_input = window.setInterval(cut, 3000);
	 });
	 var search_pull_index = 0;
	 function cut(){
		 search_pull_index++;
		 if(search_pull_index >5){
			 search_pull_index = 0;
 		 }
		 if(search_pull_index >= 0 && search_pull_index <=5){
			 var search_pull_text = $(".search_pull-down>ul>li:eq("+search_pull_index+")").text();
			 $("#input_search").attr("placeholder"," "+search_pull_text)
		     console.log(search_pull_text); 
		 }
	 }
	 	// 定时器一秒执行一次
	     var setl_input = window.setInterval(cut, 3000);
});
