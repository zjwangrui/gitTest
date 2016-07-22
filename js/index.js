
(function($){
	
	//我的账户，鼠标移过时下拉列表
	var $h_l1 = $('.h_l1');
	 $h_l1.on('mouseover',function(){
		$h_l1.find('.h_self').show()	
		$h_l1.css({'border':'1px solid #cccccc','background':'#fff'})	 
	 }).on('mouseout',function(){
		 $h_l1.find('.h_self').hide();
		 $h_l1.css({'border':'none','background':''})
	 })
	 
	 //全部商品的二级菜单
	 var box_left = $('#box_left').children('ul');
	 var box_right = $('#box_right').children('ul');
	 box_left.on('mouseover',function(){
		$('.banner_box_right').css('display','block') 
	 })
	
	
	
})(jQuery);
/*window.onload=function(){
	//全部商品的二级菜单
	 var oLeft = document.getElementById('box_left');
	 var oRight = document.getElementById('box_right');
	 var aLeft = oLeft.getElementsByTagName('li');
	 var aRight = oRight.getElementsByTagName('li');
	console.log(aLeft)
	for(var i=0; i<aLeft.length; i++){
		
		 aLeft[i].num = i;
		 aLeft[i].onmouseover=function(){
		 	 for(var i=0; i<aLeft.length; i++){
				 aLeft[i].className = "";
				aRight[i].className = "";	
			 }
			 this.className = "selected";
			 aRight[this.num].className = "selected";
		}
	 }	
}*/






























