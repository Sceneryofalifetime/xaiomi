$(function() {
	var thl_time;
	var thl_nowtime;
	$(document).ready(function() {
		// 定时器一秒执行一次
		window.setInterval(calculate_time, 1000);
		setInterval(function() {
			$("#next_thl").trigger("click");
		}, 7000);
	});

	function calculate_time() {
		// 获取当前系统时间
		var nowhours = new Date().getHours();
		var nowminutes = new Date().getMinutes();
		var nowseconds = new Date().getSeconds();
		// 定义开场时间 
		var hours = 24;
		var minutes = "00";
		// 计算开始时间和当前时间差
		thl_time = hours * 3600 + minutes * 60;
		thl_nowtime = nowhours * 3600 + nowminutes * 60 + nowseconds
		var time = (thl_time - thl_nowtime);
		var cd_hours = Math.floor(time / 3600);
		var cd_minutes = Math.floor((time / 60) % 60);
		var cd_seconds = Math.floor(time % 60);
		// 为个位数时拼接一个0
		if (cd_hours < 10 && cd_hours >= 0) {
			cd_hours = "0" + cd_hours;
		}
		if (cd_minutes < 10 && cd_minutes >= 0) {
			cd_minutes = "0" + cd_minutes;
		}
		if (cd_seconds < 10 & cd_seconds >= 0) {
			cd_seconds = "0" + cd_seconds;
		}
		if (time <= 0) {
			cd_hours = "00";
			cd_minutes = "00"
			cd_seconds = "00"
		}
		// 传值到html
		$("#sp_se").html(hours + ":" + minutes);
		$("#h_time").html(cd_hours);
		$("#m_time").html(cd_minutes);
		$("#s_time").html(cd_seconds);
		// console.log(cd_hours);
		// console.log(cd_minutes);
		// console.log(cd_seconds);
	}

	// 商品走马灯 
	// js动态改变border颜色
	var thl_len = $(".thl>ul>li").length;
	for (var i = 0; i < thl_len; i++) {
		if (i % 3 == 0) {
			$(".thl>ul>li:eq(" + (i - 1) + ")").css({
				"border-top": "1px solid #2196f3"
			});
			$(".thl>ul>li:eq(" + (i - 1) + ")").css({
				"border-top": "1px solid #e53935"
			});
			$(".thl>ul>li:eq(" + (i) + ")").css({
				"border-top": "1px solid #00d3d3"
			});
		}
	}
	// 走马灯点击事件
	var thl_x = 0;
	var thl_width = $(".thl").width();

	$("#next_thl").click(function() {
		console.log(thl_x)
		// if (thl_x >= 0 && thl_x < 1930) {
		// }
		next_click();
	});
	$("#top_thl").click(function() {
		// if (thl_x > 0) {
		// }
		top_click();
	});
	var next_click = function next_click() {
		thl_x = thl_x + 965;
		if (thl_x > 1930) {
			thl_x = 0
			$(".thl>ul>li").animate({
				left: thl_x,
			}, 1000);
		} else {
			$(".thl>ul>li").animate({
				left: -thl_x,
			}, 1000);
		}

	}
	var top_click = function top_click() {
		thl_x = thl_x - 965;
		if (thl_x < 0) {
			thl_x = 1930
			$(".thl>ul>li").animate({
				left: -thl_x,
			}, 1000);
		} else {
			$(".thl>ul>li").animate({
				left: -thl_x,
			}, 1000);
		}

	}
});
