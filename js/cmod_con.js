$(function() {
	// $(".sp_navigation_classify a").hover(function(){
	// 		 $(".cmod_con").slideDown();
	// 		 $(".cmod_con ul li").eq($(this).index()).show().siblings("li").hide();
	// },function(){
	// 		 $(".cmod_con").hide();
	// });
	// // 悬浮获取a标签的索引
	var that;
	// 悬浮出现
	$(".sp_navigation_classify a").hover(function() {
		that = $(this).index();
		console.log(that);
		if (that <= 6 && that>0) {
			cmod_con_show(that); // 调用显示方法
		}
		if(that>6||that == 0){
			$(".cmod_con").hide(200);
		}
		if(that=null
		){
			$(".cmod_con").hide(200);
		}
	});
	$(".cmod_con").mouseenter(function(){
		$(this).show();
	});
	$(".cmod_con").mouseleave(function(){
		$(".cmod_con").slideUp(20);
	});
	$(".sp_classes,.navigation").mouseenter(function(){
		$(".cmod_con").slideUp(20);
	});
	function cmod_con_show(that){
		$(".cmod_con").slideDown(200)
		$(".cmod_con ul li:eq(" + (that-1) + ")").show().siblings().hide();
	}
	// 返回顶部时间
	 $(window).scroll(function () {
	        var scroll_top = $(document).scrollTop();
	        if (scroll_top > 400) {               //当向下滚动230px时,出现返回顶部链接
	            $("#bg_tp").show();
	        } else {
	            $("#bg_tp").hide();
	        }
	    });
	    $("#bg_tp").click(function () {
	        $("html,body").animate({scrollTop:0},200);
	    });
});
