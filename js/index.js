var zwx_index = {
	_service :['家电清洗','家电维修','家电安装','家电回收','管道疏通','开锁换锁','家具门窗','水电维修'],
	_initData : function(){
		//八大服务
		var self = this;
		var htmlService = '',serviceName = self._service;
		for(var i=0;i<serviceName.length;i++){
			htmlService += '<li data-typeservice="'+(i+1)+'" id="serviceType'+(i+1)+'"><div class="img"><img src="http://img0.xiujiadian.com/pcPortal/images/index_service_type'+(i+1)+'.jpg" alt="'+serviceName[i]+'"/></div><p class="name">'+serviceName[i]+'</p><div class="mask-inner"><div class="mask-bg"></div><span class="btn">查看详情</span></div></li>';
		}
		$("#serviceList").html(htmlService);
		
		self._intEvent();
	},
	_intEvent :function(){
		var self = this;
		
		//鼠标经过八大服务
		$("#serviceList li").mouseenter(function(){
			var $this = $(this);
			$this.find(".mask-inner").fadeIn("fast");
		});
		$("#serviceList li").mouseleave(function(){
			var $this = $(this);
			$(".mask-inner").fadeOut("fast");
		});
		
		//鼠标点击八大服务
		$("#serviceList li").click(function(){
			var serviceItem = $(this).attr("data-typeservice");
			location.href = '../pages/product.html?serviceItem='+ serviceItem +'&v='+Date.parse(new Date());
		});
		
		//中间大banner图切换
	    var swiper = new Swiper('#swiperBanner', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplay : 4000
	    });
	    
		
	},
	// _showCodeAnimate :function(e){
	// 	var $this = $(this),
	// 	$show = $this.find(".left-con"),
	// 	leftP = ($this.index() == 0) ? -170 : -150;
		
	// 	$this.addClass("active").siblings("li").removeClass("active");
	// 	$show.show()
	// 	.animate({
	// 		left:leftP
	// 	},100);
	// },
	// _hideCode : function(e){
	// 	var $this = $(this),
	// 	$hide = $this.find(".left-con"),
	// 	leftP = ($this.index() == 0) ? -140 : -120;
		
	// 	$hide.hide().css({"left" : leftP+'px'});
	// 	$this.removeClass("active");
	// },
	init : function() {
		var self = this;
		self._initData();
	}
}

$(function() {
	zwx_index.init();
});
