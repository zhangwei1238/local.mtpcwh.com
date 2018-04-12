/*2016-12-14 中间商务通 zxlrem*/
showzx();
document.writeln("<style>");
document.writeln("body, h1, h2, h3, h4, h5, h6, hr, p,blockquote,dl, dt, dd, ul, ol, li,pre,form, fieldset, legend, button, input, textarea,th, td,img{border:medium none;margin: 0;padding: 0;list-style-type: none;}");
document.writeln("body,button, input, select, textarea {font: 12px, \'微软雅黑\',tahoma, Srial, helvetica, sans-serif;}");
document.writeln("h1, h2, h3, h4, h5, h6 { font-size: 100%;font-weight:normal; }");
document.writeln("em{font-style:normal;}");
document.writeln("ul, ol,{ list-style: none; }");
document.writeln("a { text-decoration: none; }");
document.writeln("a:hover { text-decoration: none;  }");
document.writeln("img{ border:0px;}");
document.writeln("body,.ui-overlay-h{margin:0 auto;position:relative;background:#fff;}");
document.writeln("input, img {vertical-align: middle;}");
document.writeln("body,html{margin:0 auto;}");
document.writeln("img {border:none;vertical-align:top;}");
document.writeln("* {margin:0;padding:0;text-shadow:none;}");
document.writeln(".absolute { position: absolute;}");
document.writeln(".swtCenter {width:280px;height:248px; background-color:#FFF;position:fixed;left:50%;top:50%;z-index:200;margin-left:-130px;margin-top:-130px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;-moz-box-shadow:0 0 20px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 20px rgba(10,2,4,0.75);box-shadow:0 0 20px rgba(10,2,4,0.75); display:none;}");
document.writeln(".swtCenter h3 {width:100%;font-size:25px;text-align:center; color:#024CAA;font-weight:bold;margin-top:20px;height:34px;line-height:34px}");
document.writeln(".swtCenter h4 {width:100%;font-size:18px;text-align:center;color:#2e3642;height:28px;line-height:28px}");
document.writeln(".swtCenter h4 img{width: 24px;height: 24px; margin:2px 5px 0 5px;}");

document.writeln(".mfhd {width:227px;height:40px;margin:9px auto 0;}");

document.writeln(".callbF { background-color: #fff; border-radius: 15px 0 0 15px;color: #6a7380;float: left; font-size: 12px; height: 32px; line-height: 32px; outline: medium none; padding-left: 13px;  width: 157px;box-sizing:border-box; border:1px solid}");
document.writeln(".mfhd a {width:69px;height:30px;line-height:30px;color:#fff; background-color:#6a7380;font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;}");
document.writeln(".submit {width:69px;height:32px;line-height:32px;color:#fff; background:#FF6005;font-size:12px;cursor:pointer;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;}");
document.writeln(".swtCenter p {width:100%;font-size:14px;color:#6a7380;margin:0 auto; text-align:center; line-height:0}");

document.writeln("#cen1,#cen2{display:block;overflow:hidden;margin-top:6px;width:227px;margin:0 auto}");
document.writeln("#cen1 dl,#cen2 dl{overflow:hidden;}");
document.writeln(".cena dt{display:inline-block;width:46px;height:46px;float:left;margin-top:5px;text-align: center;}");
document.writeln("#cenb{width:46px;height:46px}");
document.writeln(".cena dd{margin:0;display:inline-block;position:relative;width:180px;height:46px;float:left;margin-top:5px;}");
document.writeln(".cenc{font-size:12px;width:auto;color:#000;position:relative;margin-left:5px;padding: 0 6px;border:1px solid #7ebbe4;border-top-color:#b2daf0;border-radius:12px;box-shadow:0 3px 0 #3ea0dd,inset 0 1px 1px #fff;background-image: -moz-linear-gradient(#c6e5fa, #a6d7f7);background-image:-webkit-linear-gradient(#c6e5fa, #a6d7f7);background-image: -o-linear-gradient(#c6e5fa, #a6d7f7);background-image:linear-gradient(#c6e5fa, #a6d7f7);letter-spacing:-1px;text-align:left;height:40px;line-height:40px}");
document.writeln(".cenc img{width:20px;height:20px;float:left;margin-top:10px}");

document.writeln(".swt_lists {bottom:0;left:0;width:100%;height:58px;line-height:58px;-moz-border-radius:0 0 15px 15px;-webkit-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;}");
document.writeln(".swt_lists a {display:block;width:50%;height:100%;position:relative;float:left;}");
document.writeln(".swt_list1 { background-color:#064a9e;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px;}");
document.writeln(".swt_list2 { background-color:#ff6005;-moz-border-radius:0 0 15px 0;-webkit-border-radius:0 0 15px 0;border-radius:0 0 15px 0;}");
document.writeln(".swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;}");
document.writeln(".swtCallIcon {top:50%;margin-left:-50px;margin-top:-13px;width:27px;height:24px; background:url(/assets/images/footerLink3.gif) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swt_lists em {height:100%;top:0;margin-left:-16px;font-size:16px;}");
document.writeln(".swtLinkIcon {top:50%;margin-left:-50px;width:27px;height:27px;margin-top:-12px;background:url(/assets/images/footerLink2.gif) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;}");
document.writeln(".closeBtn_swt {right:-2px;top:-2px;width:33px;height:33px; background:url(/assets/images/closeBtn_swt.png);background-size:100%; no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;cursor:pointer;}");
document.writeln("</style>");
document.writeln("<div class=\"swtCenter relative\" id=\"swt_center\">");
document.writeln("    	<span id=\"closeBtn_swt\" class=\"closeBtn_swt absolute\" href=\"javascript:void(0);return false;\" onclick=\"hideswt();return false;\"></span>");
document.writeln("    	<h3>武汉蓝天医院</h3>");
document.writeln("        <h4>武汉医保定点<img src=\"/assets/images/swt_logo.png\" />无假日医院</h4>");
document.writeln("<a href=\'javascript:void(0);return false;\' onclick=\'openZoosUrl();return false;\' id=\'cen1\'>");
document.writeln("	<dl class=\'cena\'>");
document.writeln("		<dt><img id=\'cenb\' src=\'/assets/images/asdyu.png\'  style=\'border-radius:50%\'></dt>");
document.writeln("		<dd>");
document.writeln("			<div class=\'cenc\'><img src=\'/assets/images/smile.gif\'>请问您咨询什么问题?</div>");
document.writeln("		</dd>");
document.writeln("	</dl>");
document.writeln("</a>");
document.writeln("<a href=\'javascript:void(0);return false;\' onclick=\'openZoosUrl();return false;\' id=\'cen2\' style=\'display:none\'>");
document.writeln("	<dl class=\'cena\'>");
document.writeln("		<dt><img id=\'cenb\' src=\'/assets/images/asdyu.png\' style=\'border-radius:50%\'></dt>");
document.writeln("		<dd>");
document.writeln("			<div class=\'cenc\'><img src=\'/assets/images/smile.gif\'> 可以输入电话免费咨询。</div>");
document.writeln("		</dd>");
document.writeln("	</dl>");
document.writeln("</a>");
document.writeln("        <div class=\"mfhd clearfix\" id=\"swt_mid_tel\">");

/*document.writeln("        	<input class=\"callbF_text\" type=\"text\" placeholder=\"\"  value=\"\"  onfocus=\"value=\'\'\"  onblur=\"if(!value)value=defaultValue\" name=\"telInput33\" id=\"telInput33\" />");
document.writeln("           <input type=\"button\"  name=\"callBtn33\" id=\"callBtn33\" value=\"免费回电\" class=\"submit\"  />"); */

document.writeln("			<input class=\"callbF\"  type=\'text\'  id=\'telInput33\'  name=\"telInput33\"  placeholder=\"请输入您的电话号码\" />");
document.writeln("			<input class=\"submit\" type=\"button\"  name=\"callBtn33\" id=\"callBtn33\" value=\"免费回电\"/>"); 

document.writeln("        </div>");
/* document.writeln("        <p>我们将立即回电。请放心接听!style=\'width:154px;height:32px;border:1px solid;\'</p>");*/
document.writeln("        <div class=\"swt_lists absolute\">");
document.writeln("        	<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" class=\"swt_list1\" id=\"swt_mid_zxzx\" ><i class=\"swtCallIcon\"></i><em>在线咨询</em></a>");
document.writeln("            <a href=\"tel:027-83855737\" class=\"swt_list2\" id=\"swt_mid_mfth\"><i class=\"swtLinkIcon\"></i><em>免费电话</em></a>");
document.writeln("        </div>");
document.writeln("    </div>");

document.getElementById("callBtn33").onclick = function () { 
lxb.call(document.getElementById("telInput33"));
};



//头部微信改版2017.1.4 
/* document.writeln("<style>");
document.writeln("*{margin:0;padding:0;}");
document.writeln(".weixin{width: 16rem;height: 3rem;background: rgba(0,0,0,0.8);position: fixed;top: -120px;left: 50%;margin-left: -8rem;z-index:9999;}");
document.writeln(".weixin a{display: block;height:100%；}");
document.writeln(".weixin .wx1{overflow:visible;}");
document.writeln(".wx1{width: 1.5rem;height: 1.5rem;float: left;margin: 0.55rem 0.65rem 0 0.6rem;background: url(/templets/default/swt//images/wx1_03.png) no-repeat center;background-size: 100%;}");
document.writeln(".wx23{width:0.55rem ;height: 0.55rem;float: right;margin: -0.2rem -0.15rem 0 0;}");
document.writeln(".wxp{font-size:0.55rem ;color: white;padding: 0.36rem;line-height: 0.86rem;}");
document.writeln(".wxp b{font-size: 0.6rem;margin-right:0.24rem;}");
document.writeln(".wx2{width: 1.625rem;height:0.225rem ;margin: 0 auto;display: block;}");
document.writeln(".wxp .txtaa{ background: rgba(0,0,0,0.8);color:#fff;display:inline-block;text-align:center;cursor:pointer;font-size:0.6rem;margin-bottom:0.2rem;height:1rem;line-height:1rem}");
document.writeln(".wxp span{display:block;line-height:1.2rem;height:1.2rem}");
document.writeln("</style>");
document.writeln("<div class=\'weixin\'>");
document.writeln("			<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\"  target=\"_self\">");
document.writeln("				<div class=\'wx1\'><img src=\'/assets/images/wx23_03.png\' class=\'wx23\'/></div>");
document.writeln("				<p class=\'wxp\'><b>新消息</b>   推送<br/><span>您是想了解“<input type=\'text\' id=\'txtaa\'  class=\'txtaa\' value=\"\"/>”吗</span></p>");
document.writeln("				<img src=\'/assets/images/wx2_03.png\' class=\'wx2\'/>");
document.writeln("			</a>");
document.writeln("		</div>");
   function weixin_c(){
   	    $(".weixin").animate({"top":"3px"},120);
				$(".weixin").animate({"top":"0px"},120);
   }
   function weixin_x(){
   	    $(".weixin").animate({"top":"-120px"},120);
   }
   setTimeout("weixin_c()",5000)
   setTimeout("weixin_x()",10000)
   setTimeout("weixin_xh()",5000)
   function weixin_xh(){
   	  setInterval(function(){
			weixin_c();
			setTimeout("weixin_x()",5000)
			},11000)
   }
   
   refer=document.referrer;   
sosuo=refer.split(".")[1];  
grep=null;  
str=null; 
cms="";  
switch(sosuo){  
  case "baidu":  
    grep=/word\=.*\&/i;  
    str=refer.match(grep)  
    cms=str.toString().split("=")[1].split("&")[0];  
    cms=decodeURIComponent(cms);  
  break; 
}	
  if(cms==null||cms==undefined||cms=='')  
    {  
        document.getElementById('txtaa').value="甲状腺疾病";  
    }else  
    {  
        document.getElementById('txtaa').value=cms;  
    }  
	if(cms==null||cms==undefined||cms=='')  
    {  
        document.getElementById('tell_f').value="您有什么要咨询的...";  
    }else  
    {  
        document.getElementById('tell_f').value=cms;  
    }  
	
	*/