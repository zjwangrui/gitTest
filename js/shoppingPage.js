jQuery(function($){
	//获取cookie，把商品信息写入#cartList
	render();

	// 点击删除cookie
	$('.prodel').on('click',function(){
		var $dl = $(this).closest('dl');
		var goodsname = $dl.attr('data-goodsname');

		// 把过期时间设置成昨天
		var now = new Date();
		now.setDate(now.getDate()-1);

		// 删除cookie
		document.cookie = goodsname + '=null;expires=' + now;

		// 移除html
		$dl.remove();

		// location.reload();
		render();
	});


	function render(){
		var _cookie = document.cookie.split('; ');
		// 遍历cookie
		var $gwcpro = $('.gwcpro');
		var subPrice = 0;
		if(_cookie != ''){
			$.each(_cookie,function(idx,val){
				var info = JSON.parse(val.split('=')[1]);
				var $proname = $('.proname').text(info.name);
				var $proguige = $('.proguige').text(info.guige);
				var $price = $('.proprice').html(info.price);
				//var yibanjia = parseFloat(info.zhekou*info.price/10).toFixed(2);
				var $zhekou = $('.yibanprice').html(info.zhekou*info.price/10);
				var $pronum = $('.pronum').val(info.qty);
				var $prosum = $('.prosum').html(info.price*info.qty);
				var $proshc = $('.proshc').html('转入收藏夹');
				var $prodel = $('.prodel').html('删除');
				$gwcpro.append([$proname,$proguige,$zhekou,$price,$pronum,$prosum,$proshc,$prodel]);

				// 计算总价
				subPrice += info.price * info.qty;
				
				$('#subPrice').text(info.price * info.qty);
			});
		}
		var $del =$('.prodel');
		$del.on('click',function(){
			$del.parent().empty();
			document.cookie = _cookie + '=null;expires=-1';
		})
		// toFixed(n): 保持小数点后n位，自动四舍五入，返回一个字符串
		$('.subPrice').html('&yen;' + subPrice.toFixed(2));
	}
	
});