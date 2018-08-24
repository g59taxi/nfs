(function($) {
	'use strict';




	//遅延ロード ------------------------------------------------------
	$(document).ready(function(){
		$("img.lazy").lazyload({
			effect : "fadeIn",
			effect_speed : "slow"
		});
	});


	//SVG非対応ブラウザではPNGに変換 ------------------------------------------
	$(function(){
		if (!Modernizr.svg){
			$('img').each(function() {
				$(this).attr('src', $(this).attr('src').replace(/\.svg/gi,'.png'));
			});
		}
	});


	//メニュー固定 ------------------------------------------
	$(function(){
		var nav = $("header"),
		offset = nav.offset();
		if($(nav)[0]){
//		if($("#topHeader")[0]){
			$(window).scroll(function () {
				if($(window).scrollTop() > offset.top) {
					nav.addClass('fixed');
				}else{
					nav.removeClass('fixed');
				}
			});
		}
	});


	//SP用プルダウンメニュー ------------------------------------------
	$(function(){
		$("#headerSPMenu").click(function(){
			$("#headerSPNavi").slideToggle();
			return false;
		});
	});


	//ページ内スクロール ------------------------------------------------------
	$(function(){
		$("#contentMenu a[href^=#]").click(function(){

			var headerHight = $('header').height();
			var scrollDistance = $(window).scrollTop();

			console.log(headerHight);
			console.log(scrollDistance);

			if(scrollDistance === 0){
					headerHight = headerHight * 2 + 40;
				}else{
					headerHight = headerHight * 2 - 10;
			}

			var speed = 500;
			var href= $(this).attr("href");
			var target = $(href === "#" || href === "" ? "html" : href);
			var position = target.offset().top - headerHight;
		/*	var position = target.offset().top;*/
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		});
	});


	//ページトップへ ------------------------------------------------------
	$(function() {
		var topBtn = $(".pagetop");
		topBtn.click(function () {
			$("body,html").animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});


	//トップスライド ------------------------------------------------------
	$(function(){
		$("#topMainImg").bgSwitcher({
			images: ['common/img/img_topMain01.jpg', 'common/img/img_topMain02.jpg', 'common/img/img_topMain03.jpg'],
			interval: 5000,
			effect: "fade"
		});

		var next_btn=$(".next_btn");
		var prev_btn=$(".prev_btn");

		next_btn.click(function(){
		$("#topMainImg").bgswitcher("next");
		});

		prev_btn.click(function(){
		$("#topMainImg").bgswitcher("prev");
		});
	});


	//フッター補助メニュー ------------------------------------------------------
	$(function(){
		var footerBtn = $("#footerContentSubmenu div button");
		footerBtn.click(function(){
			window.location.href = "/sitemap.html";
			return false;
		});
	});




}(jQuery));