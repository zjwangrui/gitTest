(function($){
	
	//我的账户，鼠标移过时下拉列表
	var $h_l1 = $('.h_l1');
	 $h_l1.on('mouseover',function(){
		$h_l1.find('.h_self').show()	
		$h_l1.css({'border':'1px solid #cccccc','background':'#fff'})	 
	 }).on('mouseout',function(){
		 $h_l1.find('.h_self').hide();
		 $h_l1.css({'border':'none','background':''})
	 });
	 
	 
})(jQuery);