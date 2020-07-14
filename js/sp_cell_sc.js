$(function(){
	$("#sc_Tab>li").hover(function(){
		var sc_Tab_index = $(this).index();
			$("#sp_universal>ul:eq("+sc_Tab_index+")").css({"display":"block"}).siblings().css({"display":"none"});
		    $(this).addClass("pich_on").siblings().removeClass("pich_on");
	});
	$("#inte_Tab>li").hover(function(){
		var sc_Tab_index = $(this).index();
			$("#sp_inte_Tab>ul:eq("+sc_Tab_index+")").css({"display":"block"}).siblings().css({"display":"none"});
		    $(this).addClass("pich_on").siblings().removeClass("pich_on");
	});
	// 视频专栏特效
	var vido_index;
	$(".sp_vido_con>ul>li").hover(function(){
		vido_index = $(this).index();
		console.log(vido_index);
	   $(".sp_vido_con>ul>li:eq("+vido_index+")>a>span").css({"background-color":"rgb(255,103,0)","border":"1px solid rgb(234,118,13)"});
	},function(){
	   $(".sp_vido_con>ul>li:eq("+vido_index+")>a>span").css({"background-color":"rgba(0,0,0,0.00001)","border":"1px solid rgb(255, 255, 255)"});
	});
	// 点击效果
	$(".sp_vido_con>ul>li").click(function(){
		vido_index = $(this).index();
		$(".vido_window").slideDown();
	    var vido_text = $(".sp_vido_con>ul>li:eq("+vido_index+")>a>h3").text();
		var vido_src = $(".sp_vido_con>ul>li:eq("+vido_index+")>a>img").attr("longdesc");
		$(".vido_window>h3>span").html(vido_text);
		$(".vido_window>video").attr("src",vido_src);
		// console.log(vido_text);
		console.log(vido_src);
	});
	$(".icon-cha").click(function(){
		$(".vido_window").slideUp();
		$(".vido_window>video").attr("src","");
	});
});