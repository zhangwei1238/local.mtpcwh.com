// JavaScript Document
document.writeln('<script language="javascript" src="http://ala.zoosnet.net/JS/LsJS.aspx?siteid=ALA97850302&float=0&lng=cn"></script>');


//夜间
document.write("<style>");
document.write("#remark1{background:#000;filter:alpha(opacity=60);opacity:0.6;position:fixed;top:0;left:0;z-index:99999999999;display:none;width:100%;height:100%;}");
document.write("#message{width:644px;height:240px;position:fixed;left:26%;top:100px;padding:265px 0px 0px 36px;background:#fff url(/templets/wuhan/images/yj_1.jpg) no-repeat;z-index:999999999999;font-size:14px;display:none;}");
document.write("#message form td strong{color:#FF0000;font-weight:normal;padding-right:7px;}");
document.write("#message form td{padding-top:7px;color:#0b392e;}");
document.write("#message form td table td{padding:0px;}");
document.write("#message form input{border:1px solid #ccc;}");
document.write("#message form p .yj_sub{border:0px none;width:188px;height:32px;margin-left:210px;background:rgb(4,55,107);cursor:pointer;color:#fff;}");
document.write("#message .mess_tit{position:absolute;top:-5px;right:5px;color:#fff;font-size:25px;cursor:pointer;}");
document.write("</style>");

document.write('<div id="remark1"></div>');
document.write('<div id="message">');
document.write('<div class="mess_tit" title="关闭">x</div>');
document.write('<form action="http://ala.zoossoft.com/LR/Chatpre.aspx?id=ALA97850302&lng=cn" method="post">');
document.write('<input type="hidden" value="57" name="hid" />');
document.write('<table width="608" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr>');
document.write('<td width="88"><strong></strong>患者姓名： </td>');
document.write('<td width="290" valign="top"><input type="text" name="name" style="width:156px;height:23px;line-height:23px;"></td>');
document.write('<td width="61"><strong></strong>性别：</td>');
document.write('<td width="164">');
document.write('<table width="164" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr>');
document.write('<td width="10"></td>');
document.write('<td width="20" valign="middle"><input type="radio" value="" name="sex"></td>');
document.write('<td width="35">男</td>');
document.write('<td width="20" valign="middle"><input type="radio" value="" name="sex"></td>');
document.write('<td>女</td>');
document.write('</tr>');
document.write('</table>');
document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><strong>*</strong>联系电话：</td>');
document.write('<td valign="top">');
document.write('<input type="text" name="tel" style="width:156px;height:23px;line-height:23px;">');
document.write('<p style="font-size:12px;padding-top:5px;color:#999;">电话信息务必准确，方便专家帮您看诊</p>');
document.write('</td>');
document.write('<td><strong></strong>年龄：</td>');
document.write('<td><input type="text" name="depart" style="width:156px;height:23px;line-height:23px;"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td valign="top"><strong></strong>病种选择：</td>');
document.write('<td colspan="3"><select name="memo" style="border:1px solid #ccc;width:156px;height:23px;padding-top:2px;"><option selected="selected" value="甲亢">甲亢</option><option value="甲减">甲减</option><option value="甲状腺结节">甲状腺结节</option><option value="甲状腺肿大">甲状腺肿大</option><option value="甲状腺瘤">甲状腺瘤</option><option value="甲状腺炎">甲状腺炎</option><option value="甲亢性突眼">甲亢性突眼</option><option value="甲状腺囊肿">甲状腺囊肿</option></select></td>');
document.write('</tr>');
document.write('</table>');
document.write('<p style="font-size:12px;color:#999;padding:5px 0px 28px 88px;"><span style="color:#ff0000;">注：</span>您提交信息后，专家会致电给您，此过程完全免费，而且不会泄露您的隐私，请放心使用。</p>');
document.write('<p><input type="submit" value="提交" class="yj_sub" /></p>');
document.write('</form>');
document.write('</div>');


//在线留言
$(function(){
	$("#remark1").css("height",$(document).height());  
	$("#remark1").css("width",$(document).width());
	//商务通中间js
	$(".mess_tit").click(function(){
		$(this).parent("div").hide();
		$(".swt").hide();
		$("#remark1").css({display:"none"});
		var t = setTimeout("open_swt()",15000);
	});
	
	var myDate = new Date();
	var h=myDate.getHours(); 
	if(h >= 23 || h < 8){
		$("#message").attr({style:"display:block;"});
		$(".swt").attr({style:"display:none;"});
		$("#remark1").css({display:"block"});
	}
});

function open_swt(){
	$("#message").show();
	$("#remark1").css({display:"block"});
}




$(document).ready(function()
{
	setTimeout(function(){$(".swt").slideUp(300).fadeIn(400)},10000);
});

// 页面加载 JS 
window.onload = function(){	
	//商务通中间js
	$(".sff").click(function(){
		$(this).parent("div").hide();
		var t = setTimeout("openswt()",30000);
	});
	$(".swtspan").click(function(){
		$(this).parent("div").hide();
		var t = setTimeout("openswt()",25000);
	});
};
// 商务通弹出框关闭函数
function openswt(){
	$(".swt").slideDown("slow");
}


//春节悬浮
$(function(){
	$("#remark").css("height",$(document).height());  
	$("#remark").css("width",$(document).width());

	var myDate = new Date();
	var y=myDate.getFullYear();
	var m=myDate.getMonth()+1;
	var d=myDate.getDate();
	var h=myDate.getHours();
	if(y==2016 && m==2 && (d>=6 && d<=11)){
		$(".cjfd,#remark").show();
        $("#remark1,#message").hide();
	}
	$(".cjfd_tit").click(function(){
		$(this).parent("div").hide();
		$("#remark").css({display:"none"});
		var t = setTimeout("open_cjfd()",15000);
	});
}); 
function open_cjfd(){
	$(".cjfd").show();
	$("#remark").css({display:"block"});
}
document.write('<style>');
document.write('*{padding:0px;}');
document.write("#remark{background:#000;filter:alpha(opacity=60);opacity:0.6;position:fixed;top:0;left:0;z-index:999999999;display:none;width:100%;height:100%;}");
document.write('.cjfd{display:none;z-index:999999999;color:#333;font-size:14px;width:680px;padding-top:79px;background:#fff url(images/cjfd_1.jpg) no-repeat;margin-left:-340px;margin-top:-219px;position:fixed;top:50%;left:50%;}');
document.write(".cjfd_tit{position:absolute;top:-5px;right:5px;color:#fff;font-size:25px;cursor:pointer;}");
document.write('.cjfd h1{font-size:24px;color:red;text-align:center;padding:28px 0px 13px;}');
document.write('.cjfd h2{font-size:14px;color:red;padding:0px 0px 10px;}');
document.write('.cjfd p{line-height:23px;text-indent:2em;}');
document.write('.cjfd form{padding:25px 0px 0px 16px;}');
document.write('.cjfd form span{color:red;padding-right:5px;}');
document.write('.cjfd form h6{font-size:12px;text-align:left;font-weight:500;padding:4px 0px 20px 12px;}');
document.write('.cjfd form input.cj_input{width:146px;height:25px;line-height:25px;padding:0px 5px;font-size:14px;color:#333;background:#fff;border:1px solid #cbcbcb;margin-bottom:8px;}');
document.write('.cjfd form .cj_submit{font-weight:600;float:none;cursor:pointer;width:188px;height:32px;line-height:32px;color:#fff;font-size:14px;text-align:center;border:0 none;background:#0e438d;margin-left:190px;}');
document.write('</style>');
document.write('<div id="remark"></div>');
document.write('<div class="cjfd">');
document.write('<div class="cjfd_tit" title="关闭">x</div>');
document.write('<div style="border:1px solid #cbcbcb;padding:0px 55px 20px 55px;">');
document.write('<h1>【春节咨询公告】</h1>');
document.write('<h2>亲爱的访问者，新年好!</h2>');
document.write('<p style="width:505px;padding-bottom:5px;">春节来临日，阖家团圆时。2月6号-2月11号为医院放假期间，没有专家坐诊，请留下您的联系方式，2月12号早晨，我们将给您回电，请注意查收。</p>');
document.write('<p><b style="color:red;">官方提醒：</b>您的信息不会被泄露，保证安全。避免重复给您电话，请勿重复提交！</p>');
document.write('<form action="http://ala.zoossoft.com/LR/Chatpre.aspx?id=ALA97850302&lng=cn" method="post">');
document.write('<input type="hidden" name="hid" value="57" />');
document.write('<span>*</span>患者姓名：<input type="text" name="name" class="cj_input" style="margin-right:68px;" />');
document.write('性别：<input type="radio" value="男" name="sex" checked="checked" /> 男');
document.write('<input type="radio" value="女" name="sex" /> 女');
document.write('<br/>');
document.write('<span>*</span>联系电话：<input type="text" name="tel" class="cj_input" style="margin-right:68px;" />');
document.write('年龄：<input type="text" name="depart" class="cj_input" />');
document.write('<br/>');
document.write('<h6>注：电话信息准确，方便专家帮您看诊</h6>');
document.write('<input type="submit" value="提交信息" class="cj_submit" />');
document.write('</form>');
document.write('</div>');
document.write('</div>');







//底部
document.writeln("<div style='clear:both;'></div>");
document.write("<style type='text/css'>");
document.write("#bottomNav {background:url(/templets/wuhan/images/njdi20151217.png) no-repeat top center;width:100%; height:78px;bottom:0px;left:0px;overflow:hidden; z-index:100; position:fixed;  _position: absolute; _bottom:0px; _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}");
document.write("#bottomform{margin:0px auto;width:317px;height:auto;overflow:hidden;padding-left:322px;padding-top:34px; text-align:left;}")
document.write("body{padding-bottom:55px;}");
document.write(".bottom-a {display:block;height:78px;}");
document.write("</style>");
document.write('<a class="bottom-a" href="/swt/" />');
document.write('<div id="bottomNav">');
document.write('</a>');
document.write('</div>');







function shake(){ 
	//window.console.log('shake')
	/*var a=['bottom','right'],b=0;
	var u=setInterval(function(){
		$('#lovexin1').css( a[b%2] , (b++)%4<2?0:4 );
		if(b>17){
			clearInterval(u);
			b=0;
		}
	 },30)*/
}



// 左侧电话提交
document.writeln("<style>");
document.writeln("input{ border:0; }");
document.writeln(".nleft{ width:190px; height:427px; background:url(/templets/wuhan/images/nleft.png) no-repeat; position:fixed; left:2px; top:100px; z-index:9; }");
document.writeln(".nclose{ width:16px; height:16px; position:absolute; top:0; right:0; background:none; cursor:pointer; }");
document.writeln(".nleftform{ width:118px; height:72px; position:absolute; left:9px; bottom:0; }");
document.writeln(".nleftgh{ width:84px; height:30px; margin:9px 0 0 18px; background:none; cursor:pointer;}");
document.writeln("</style>");

document.writeln("<div class=\"nleft\">");
document.writeln("    <div class=\"nclose\"></div>");
document.writeln("    <form method=\"post\" action=\"http://ala.zoossoft.com/LR/Chatpre.aspx?id=ALA97850302&lng=cn\" class=\"nleftform\" accept-charset=\"GB2312\">");
document.writeln("        <input type=\"hidden\" value=\"57\" name=\"hid\"/>");
document.writeln("        <input type=\"hidden\" value=\"页面左侧挂号\" name=\"name\"/>");
document.writeln("        <input class=\"nleftgh\" type=\"submit\" value=\"\" />");
document.writeln("    </form>");
document.writeln("</div>");

    $(".nclose").click(function(){
        $(".nleft").hide();
        setTimeout(openGuaHaoSwt($(".nleft")),15000);
    });




// 右侧弹窗
document.writeln("<style>");
document.writeln("ul,li{list-style-type:none;}");
document.writeln(".swt_right{ width:70px; height:424px; position:fixed; top:113px; right:6px;z-index: 10000;display:block}");
document.writeln(".swt_right ul li{ width:70px; height:71px;text-decoration: none;}");
document.writeln(".swt_right ul li a{ -webkit-transition: all .3s linear 0s; -moz-transition: all .3s linear 0s; -ms-transition: all .3s linear 0s; outline: none;star:expression(this.onFocus=this.blur());}");
document.writeln(".swt_right ul .swt1 a{ width:70px; height:70px; background:url(/templets/wuhan/images/swt1_01.png) no-repeat; display:block;background-position::0px 0px;}");
document.writeln(".swt_right ul .swt2 a{ width:70px; height:70px; background:url(/templets/wuhan/images/swt1_02.png) no-repeat; display:block}");
document.writeln(".swt_right ul .swt3 a{ width:70px; height:70px; background:url(/templets/wuhan/images/swt1_03.png) no-repeat; display:block}");
document.writeln(".swt_right ul .swt4 a{ width:70px; height:70px; background:url(/templets/wuhan/images/swt1_04.png) no-repeat; display:block}");
document.writeln(".swt_right ul .swt5 a{ width:70px; height:70px; background:url(/templets/wuhan/images/swt1_05.png) no-repeat; display:block}");
document.writeln(".swt_right ul .swt6 a{ width:70px; height:70px; background:url(/templets/wuhan/images/swt1_11.png) no-repeat; display:block}");
document.writeln(".swt_right ul .swt1 a:hover{background: transparent url(/templets/wuhan/images/swt1_01.png) no-repeat scroll 0px -70px}");
document.writeln(".swt_right ul .swt2 a:hover{background: transparent url(/templets/wuhan/images/swt1_02.png) no-repeat scroll 0px -70px}");
document.writeln(".swt_right ul .swt3 a:hover{background: transparent url(/templets/wuhan/images/swt1_03.png) no-repeat scroll 0px -70px}");
document.writeln(".swt_right ul .swt4 a:hover{background: transparent url(/templets/wuhan/images/swt1_04.png) no-repeat scroll 0px -70px}");
document.writeln(".swt_right ul .swt5 a:hover{background: transparent url(/templets/wuhan/images/swt1_05.png) no-repeat scroll 0px -70px}");
document.writeln("</style>");
document.writeln("<div class=\"swt_right\">");
document.writeln("  <ul>");
document.writeln("    <li class=\"swt1\"><a href=\"http://ala.zoosnet.net/LR/Chatpre.aspx?id=ALA97850302&e=yh_www.jzx.whltyy.com\" target=\"_blank\"></a></li>");
document.writeln("    <li class=\"swt2\"><a href=\"http://ala.zoosnet.net/LR/Chatpre.aspx?id=ALA97850302&e=yh_www.jzx.whltyy.com\" target=\"_blank\"></a></li>");
document.writeln("    <li class=\"swt3\"><a href=\"http://ala.zoosnet.net/LR/Chatpre.aspx?id=ALA97850302&e=yh_www.jzx.whltyy.com\" target=\"_blank\"></a></li>");
document.writeln("    <li class=\"swt4\"><a href=\"http://ala.zoosnet.net/LR/Chatpre.aspx?id=ALA97850302&e=yh_www.jzx.whltyy.com\" target=\"_blank\"></a></li>");
document.writeln("    <li class=\"swt5\"><a href=\"http://ala.zoosnet.net/LR/Chatpre.aspx?id=ALA97850302&e=yh_www.jzx.whltyy.com\" target=\"_blank\"></a></li>");
document.writeln("    <li class=\"swt6\"><a href=\"javascript:scroll(0,0);\"></a></li>");
document.writeln("  </ul>");
document.writeln("</div>");



function openGuaHaoSwt($w){
  return function(){
     $w.slideDown(200);
}
}

$(function(){
	// css
	var str = '<style>';
	str+='.cf:before, .cf:after { display: table; content: "" }';
	str+='.cf:after { clear: both }';
	str+='.cf { zoom: 1 }';
	str+='.float_container { background-color: transparent; box-sizing:border-box;border-radius: 6px; z-index: 1000; display: none; position: fixed; width: 484px;height="387px"; left: 50%; bottom: 28%; margin: 0 auto auto -220px;  font-size: 14px; }';
	str+='.close_swt{position:absolute;width:50px;height:50px;top:0px;right:5px;}';
	str+='</style>';

	// html
	str+='<div class="float_container cf" id="footTool">';
 	str+='<a style="text-decoration: none;" href="http://ala.zoosnet.net/LR/Chatpre.aspx?id=ALA97850302&e=yh_www.jzx.whltyy.com"><img src="/templets/wuhan/images/swt.png" width="484px" height="387px"></a>';
	str+='<div class="close_swt" ntitle="关闭"></div>';
	str+='</div>';
 

	$("body").eq(0).append(str);
	$(".close_swt").click(function(){
		$("#footTool").slideUp();
		$(".kst_num22").hide();
		window.setTimeout(function(){
			dh();
		}, 1000);
	});
	dh();
});

function phoneCall(id){
	lxb.call(document.getElementById(id));
}

function dh(){
	window.setTimeout(function(){
		var d = new Date();
		var h = d.getHours();
		var i = d.getMinutes();
		var s = d.getSeconds();
		i < 10 ? i = "0"+i : i;
		s < 10 ? s = "0"+s : s;
		$("#now1").html(h+":"+i+":"+s);
		$("#tools3").hide();
		$("#footTool").hide().slideDown();
	}, 8000);
	window.setTimeout(function(){
		var d = new Date();
		var h = d.getHours();
		var i = d.getMinutes();
		var s = d.getSeconds();
		i < 10 ? i = "0"+i : i;
		s < 10 ? s = "0"+s : s;
		$("#tools3").slideDown();
		$("#now2").html(h+":"+i+":"+s);
	}, 11000);
	window.setTimeout(function(){
		$(".kst_num22").slideDown();
	}, 14000);
}