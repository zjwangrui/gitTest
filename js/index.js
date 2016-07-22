
(function($){
	 //全部商品的二级菜单
	 var $dl = $('.banner_left').find('dl');
	 $dl.on('mouseenter',function(){
		 $(this).find('dt').addClass('over');
         $(this).find('dd').css({'display':'block'});
	 }).on('mouseleave',function(){
		 $(this).find('dt').removeClass('over');
		 $(this).find('dd').css('display','none');
	 });
	 /*倒计时*/
	 var intDiff = 12345;//倒计时总毫秒数量
	 timer(intDiff);
	 
	 /*手风琴效果*/
	 var $li = $('.content4_middle_right').children().find('li');
	 $li.on('mouseenter',function(){
		 $(this).find('.toplist').css('display','none');
		 $(this).find('dl').css('display','block');
		 $(this).siblings().children('.toplist').css('display','block');
		 $(this).siblings().children().find('dl').css('display','none');
	 })
})(jQuery);
window.onload=function(){
	var oBox = document.getElementById('box');
	var oUl = oBox.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var aSpan = document.getElementById('box').getElementsByTagName('span');
	var now = 0;
	aSpan[now].className = 'active';
	oBox.timer = setInterval(fnNext,3000);
	oBox.onmousemove=function(){
		clearInterval(oBox.timer);
	}
	oBox.onmouseout=function(){
		oBox.timer = setInterval(fnNext,3000);
	}
	for(var i=0; i<aSpan.length; i++){
		aSpan[i].index = i;
		aSpan[i].onmouseover=function(){
			now = this.index-1;
			fnNext();
		}
	}
	function fnPrev(){
		now--;
		if(now < 0){
			now=aLi.length-1;
		}
		for(var i=0; i<aLi.length; i++){
			aSpan[i].className = '';
		}
		aSpan[now].className = 'active';
		fnMove(oUl,{'left':-960*now});
	}
	function fnNext(){
		now++;
		if(now >= aLi.length){
			now=0;
		}
		for(var i=0; i<aLi.length; i++){
			aSpan[i].className = '';
		}
		aSpan[now].className = 'active';
		fnMove(oUl,{'left':-960*now});
	}
	/*当滚动距离大于500时，出现返回顶部按钮，点击跳到顶部*/
	window.onscroll=function(){
		var oTop = document.getElementById('top');
		var nextnav = document.getElementById('nextnav');
		var oTopH = document.documentElement.scrollTop||document.body.scrollTop;
		console.log(oTopH)
		if(oTopH > 500){
			oTop.style.display = 'block';
			nextnav.style.display = 'block';
		}else{
			oTop.style.display = 'none';
			nextnav.style.display = 'none';
		}
		oTop.onclick=function(){
			document.documentElement.scrollTop = document.body.scrollTop =0;
		}
	}
}
function fnMove(oObj, oJson, fn){
	clearInterval(oObj.timer);
	oObj.timer = setInterval(function(){
		var bStop = true;
		for(var sttr in oJson){
			if(sttr == 'opacity'){
				var curr = parseInt(getStyle(oObj,sttr)*100);
			}else{
				var curr = parseInt(getStyle(oObj,sttr));
			}
			var speed = (oJson[sttr]-curr)/6;
			speed = speed<0?Math.floor(speed):Math.ceil(speed);
			if(speed != 0){
				bStop = false;
			}
			if(sttr == 'opacity'){
				oObj.style[sttr] = (curr + speed)/100;
				oObj.style['filter'] = "alpha(opacity:"+curr + speed+")"
			}else{
				oObj.style[sttr] = curr + speed + "px";
			}
		}
		if(bStop){
			clearInterval(oObj.timer);	
			if(fn){
				fn()
			}
		}
	},30);
}
function getStyle(oObj, sAttr){
//参数：需要获取样式的元素对象, 需要获取的样式属性名、

	if(oObj.currentStyle){
	//如果该对象存在currentStyle属性，则使用它
	
		sAttr = oObj.currentStyle[sAttr];
		//对象.currentStyle[属性名]
		
	}else{ 
	//其他情况使用高版本浏览器所具有的getComputedStyle()方法
	
		sAttr = getComputedStyle(oObj, false)[sAttr];
		//getComputedStyle(对象, false)[属性名]
	}
	
	return sAttr;  //返回最终得到的样式
}
/*倒计时*/
function timer(intDiff){
	window.setInterval(function(){
	var	hour=0,
		minute=0,
		second=0,
		haomiao=0//时间默认值		
	if(intDiff > 0){
		hour = Math.floor(intDiff / (60 * 60));
		minute = Math.floor(intDiff / 60) - (hour * 60);
		second = (parseFloat(intDiff) - (hour * 60 * 60) - (minute * 60)).toFixed(1);
		//second = ((Math.floor(intDiff) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60)/10).toFixed(1);
	}
	if (minute <= 9) {
		minute = '0' + minute;
	}
	if (second <= 9) {
		second = '0' + second;
	}
	$('.hour_show').html(hour);
	$('.minute_show').html(minute);
	$('.second_show').html(second);
	intDiff-=0.1;
	}, 100);
}


























