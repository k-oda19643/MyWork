// JavaScript Document
$(function(){
	$('#menu-toggle-btn').on('click', function(){
		$('.header-wrap').toggleClass('menu-active');
		return false;
	});
});

//アコーディオン汎用型
$(function(){
	$('.toggle-container').hide();
	$('.toggle-btn').removeClass('active');
	
	$('.toggle-btn').on('click',function(){
		$(this).toggleClass('active');
		$(this).siblings('.toggle-container').slideToggle();
		return false;
	});
});
