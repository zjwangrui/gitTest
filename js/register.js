(function($){
	
	 //全部商品的二级菜单
	 
	 var $all = $('.nav_all');
	 var $banner_left = $('.banner_left');
	 var $dl = $banner_left.find('dl');
	 $all.on('mouseenter',function(){
		 that=this;
		 $(that).next('.banner_left').css({'display':'block'});
		 $dl.on('mouseenter',function(){
			 $(this).find('dt').addClass('over');
             $(this).find('dd').css({'display':'block'});
		 }).on('mouseleave',function(){
			 $(this).find('dt').removeClass('over');
			 $(this).find('dd').css('display','none');
		 });
	 });
	 $banner_left.on('mouseleave',function(){
		 $(this).css({display:'none'});
	 });
	 
	 //注册证码
	 var $register = $('#registerbtn');
	 var $yzmregister = $('.yzmregister');
	 var arr = ['../img/VerifyCode/VerifyCode01.bmp'
	 		  ,'../img/VerifyCode/VerifyCode02.bmp'
			  ,'../img/VerifyCode/VerifyCode03.bmp'
			  ,'../img/VerifyCode/VerifyCode04.bmp'
			  ,'../img/VerifyCode/VerifyCode05.bmp'
	 		  ,'../img/VerifyCode/VerifyCode06.bmp'
			  ,'../img/VerifyCode/VerifyCode07.bmp'
			  ,'../img/VerifyCode/VerifyCode08.bmp'
			  ,'../img/VerifyCode/VerifyCode09.bmp'
			  ,'../img/VerifyCode/VerifyCode10.bmp'];
	 var arr1 = ['1448','7242','9929','8142','8878','2737','8093','8051','7332','6079']
	 var yzm = parseInt(Math.random()*10);
	 $yzmregister.attr({'src':arr[yzm],'title':arr1[yzm]});
	 $yzmregister.on('click',function(){
		 var yzm = parseInt(Math.random()*10);
		 $yzmregister.attr({'src':arr[yzm],'title':arr1[yzm]});
	 });
	 $register.on('click',function(e){
		 
		var $username = $('.username').val();
		var $password = $('.password').val();
		var $password1 = $('.password1').val();
		var $email = $('.email').val();
		var $VerifyCode = $('.VerifyCode').val();
		
		var regName = /^[a-zA-Z_][\w]{5,19}$/;
		var regPass = /^([\w]|[\S]){6,20}$/;
		var rEmail =/^[0-9a-zA-Z]+[@][0-9a-zA-Z]+[.][a-zA-Z]{2,4}$/;
		
		if(!regName.test($username)){
			alert( "用户名只能输入以字母，下划线开头，长度为6-20位");
		}else if(!regPass.test($password)){
			alert("密码不能为空格，长度为6-20位");
		}else if(!regPass.test($password1)){
			alert("重复不能为空格，长度为6-20位");
		}else if($password!=$password1){
			alert("两次输入的密码不一样！");
		}else if(!rEmail.test($email)){
			alert("Email格式不正确！")
		}else if($VerifyCode!=arr1[yzm]){
			alert("验证码错误！");
		}else{
			alert("恭喜你，注册成功");	
			window.location.href='../index.html';
		}
		 
		e.preventDefault();	
	 });
	 
	 
})(jQuery);




























