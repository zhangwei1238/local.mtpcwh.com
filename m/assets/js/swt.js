//商务通轨迹代码未加载出来前执行的打开商通对话的函数。
/*
function openZoosUrl(){
  var host=document.location.host;
  var ref=encodeURIComponent(document.referrer);  
  var url="http://ala.zoossoft.com/LR/Chatpre.aspx?id=ALA97850302&lng=cn";
  //var url="/swt/im.html?p="+host+"?source=3gswtim&r="+ref;
  var iWidth=660; //弹出窗口的宽度;
  var iHeight=520; //弹出窗口的高度;
  var iTop = (window.screen.availHeight-30-iHeight)/2; 
  var iLeft = (window.screen.availWidth-10-iWidth)/2;
  window.open(url,'','height='+iHeight+',width='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no,status=no');
}
*/
/*bottom
/* document.writeln("<script type=\"text/javascript\" src=\"/templets/default/js/bottom_tan.js\"></script>"); */  
/*head*/
/*document.writeln("<script type=\"text/javascript\" src=\"/templets/default/js/head_tel.js\"></script>");*/
/*中间swt*/

document.writeln("<script type=\"text/javascript\" src=\"/assets/js/center_swt.js\"></script>");
/*footer*/
/*
document.writeln("<script type=\"text/javascript\" src=\"/templets/default/swt/footer.js\"></script>"); */
/*left*/
/*document.writeln("<script type=\"text/javascript\" src=\"/templets/default/swt/hhh.js\"></script>");*/





function showzx()
{
	setTimeout("showYQ()",8000);
}

function brping(){
	$('#swt_center').show();
	setTimeout("brping2()", 300)
}
function brping2(){
	document.getElementById("cen1").style.display = "block";
	document.getElementById("cen2").style.display = "none";
	setTimeout("cen3()", 3000)
	}
function cen3() {
	document.getElementById("cen1").style.display = "none";
	document.getElementById("cen2").style.display = "block";
	setTimeout("brping2()", 3000)
}
setTimeout("brping()",10000);
function hideswt(){
	$('#swt_center').hide(300);
	setTimeout("brping()",10000)
}

showzx();	 







