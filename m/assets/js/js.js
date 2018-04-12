/*zxl  rem控制缩放 2016-05-26*/
(function (){
	var rootHtml = $(":root");
	var rootResize = function (){
		var fontSize =$(window).width()<640?$(window).width()/16:40;
		//if(fontSize>=67.5) fontSize = 67.5;
		rootHtml.css("font-size",fontSize);	
	}
	rootResize();
	$(window).resize(function (){
		rootResize();
	});
})();
/*index click*/
$(function(){
	$(".pl_click").click(function(){
		$(".bd-box").css("height","auto");
	})
})
function float_nav(dom){
	var right_nav=$(dom);
	var nav_height=right_nav.height();
	function right_nav_position(bool){
		var window_height=$(window).height();
		var nav_top=65;
		if(bool){
			right_nav.stop(true,false).animate({top:nav_top+$(window).scrollTop()},400);
		}else{
			right_nav.stop(true,false).animate({top:nav_top},300);
		}	
		right_nav.show();
	}

	if(!+'//v1' && !window.XMLHttpRequest ){
		$(window).bind('scroll resize',function(){
			if($(window).scrollTop()>300){
				right_nav_position(true);			
			}else{
				right_nav.hide();	
			}
		})
	}else{
		$(window).bind('scroll resize',function(){
			if($(window).scrollTop()>300){
				right_nav_position();
			}else{
				right_nav.hide();
			}
		})
	}	
}

float_nav('#foot3');

var slider =
  Swipe(document.getElementById('slider'), {
    auto: 5000,
    continuous: true,
    callback: function(pos) {
      var i = bullets.length;
      while (i--) {
        bullets[i].className = ' ';
      }
      bullets[pos].className = 'on';
    }
  });
var bullets = document.getElementById('position').getElementsByTagName('li');

$(function(){
/*蓝天新闻聚焦框*/
var ad = $(".ad68");

	var e = ad.offset();

	$("body").append("<div class='adborder'></div>");

	$(".adborder").css({

		"width":ad.width(),

		"height":ad.height()-3,

		"position":"absolute",

		"border":"2px solid #f00",

		"left":e.left,

		"top":e.top}).fadeOut("fast").

		fadeIn("fast").

		fadeOut("fast").

		fadeIn("fast").

		fadeOut("fast");

})

/////**********************安全认证****************************////////////
$(function(){ 
//安全检测 
function loadsafe(){ 
var userinfo = navigator.userAgent; 
var returntxt; 
if (userinfo.indexOf("UC")>-1){ 
returntxt = "UC浏览器"; 
}else if(userinfo.indexOf("QQ")>-1){ 
returntxt = "QQ浏览器"; 
}else if(userinfo.indexOf("Firefox")>-1){ 
returntxt = "火狐浏览器"; 
}else if(userinfo.indexOf("baidu")>-1){ 
returntxt = "百度浏览器"; 
}else if(userinfo.indexOf("360")>-1){ 
returntxt = "360浏览器"; 
}else if(userinfo.indexOf("tiantian")>-1){ 
returntxt = "天天浏览器"; 
}else if(userinfo.indexOf("Opera")>-1){ 
returntxt = "欧鹏浏览器"; 
}else if(userinfo.indexOf("Maxthon")>-1){ 
returntxt = "遨游浏览器"; 
}else if(userinfo.indexOf("iPhone")>-1){ 
returntxt = "苹果浏览器"; 
}else{ 
returntxt = "系统浏览器"; 
} 
$("body").append('<div class="safe_tips"><span class="safe_arrow"></span><p class="safe_txt"><img src="/images/safeico.png" />该网站已通过'+returntxt+'安全认证 </p></div><style>.safe_tips{ width:90%;position:fixed;left:5%;top:40px;z-index:99999999; display:none;overflow:hidden;}.safe_arrow{ width:0; height:0;border-width:10px 7px 10px 7px; border-style:solid;border-color:transparent; border-bottom:10px solid #ED7A23; display:block; margin-left:5px;}.safe_txt{ width:100%; height:25px; background:#ED7A23; line-height:25px; color:#486600; font-size:16px; color:#fff; border-radius:2px;}.safe_txt img{ width:18px; margin:3px 5px 0 5px; vertical-align:top;}</style>'); 
var fin = setTimeout(function(){ 
$(".safe_tips").fadeIn(500); 
},1000); 
var fout = setTimeout(function(){ 
$(".safe_tips").fadeOut(500); 
},5000); 
} 
loadsafe(); 
}); 

