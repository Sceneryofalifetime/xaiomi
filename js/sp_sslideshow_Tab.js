// 轮播图js
$(function() {
	var index_page = 4;
	$(".next_page").click(function() {
		if (index_page < 0) index_page = 4;
		next_page(index_page);
		index_page--;
	});
	$(".top_page").click(function() {
		index_page++;
		if (index_page > 4) index_page = 0;
		top_page(index_page);
	});
	// 下一页
	function next_page(index_page) {
		$(".indicator li:eq(" + (index_page - 1) + ")").css({
			"color": "#fff"
		}).siblings().css({
			"color": "#7f7f7f"
		});
		$(".sp_sslideshow_ul li:eq(" + (index_page - 1) + ")").fadeIn(1000).siblings().fadeOut();
	}
	// 上一页
	function top_page(index_page) {
		$(".indicator li:eq(" + (index_page) + ")").css({
			"color": "#fff"
		}).siblings().css({
			"color": "#7f7f7f"
		})
		$(".sp_sslideshow_ul li:eq(" + (index_page) + ")").fadeIn(1000).siblings().fadeOut();
	}
	// 指示器
	$(".indicator li").click(function() {
		index_page = $(this).index();
		$(this).css({
			"color": "#fff"
		}).siblings().css({
			"color": "#7f7f7f"
		});
		$(".sp_sslideshow_ul li:eq(" + (index_page) + ")").fadeIn(1000).siblings().fadeOut();
	});
	//设置定时器每隔3秒秒点击定时器
		 var timer = setInterval(function(){
			 $(".next_page").trigger("click");
		 },5000);
	// 动态改变div的宽度
	var index_s = $(".sp_Tab_classify>ul>li").length - 1;

	for (var i = 0; i <= index_s; i++) {
		var len = $(".sp_Tab_classify>ul>li:eq(" + i + ")>div>ul>li").length;
		if (len > 0 && len <= 5) {
			$(".sp_Tab_classify_01 ul:eq("+i+")").css({
				"width": "250px"
			});
		}
		if (len > 5 && len <= 10) {
			$(".sp_Tab_classify_01 ul:eq("+i+")").css({
				"width": "500px"
			});
		}
		if (len > 10 && len <= 15) {
			$(".sp_Tab_classify_01 ul:eq("+i+")").css({
				"width": "750px"
			});
		}
		if (len > 15 && len <= 20) {
			$(".sp_Tab_classify_01 ul:eq("+i+")").css({
				"width": "970px"
			});
		}
		if(len>20){
			$(".sp_Tab_classify_01 ul:eq("+i+")").css({
				"width": "960px"
			});
		}
	}
   // 选项卡悬浮展示
   $(".sp_Tab>ul>li").hover(function(){
	    var index_tab = $(this).index();
		$(".sp_Tab_classify").show();
		$(".sp_Tab_classify>ul>li:eq("+index_tab+")").show().siblings().hide();
   },function(){
	   $(".sp_Tab_classify").hide();
   });
   $(".sp_Tab_classify>ul>li").hover(function(){
	   $(".sp_Tab_classify").show();
	   $(this).show();
   },function(){
	   $(".sp_Tab_classify").hide();
   });
});
