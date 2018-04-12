<?php

//邮件发送函数
function sendmail($email, $mailtitle, $mailbody)
{
    global $cfg_sendmail_bysmtp, $cfg_smtp_server, $cfg_smtp_port, $cfg_smtp_usermail, $cfg_smtp_user, $cfg_smtp_password, $cfg_adminemail,$cfg_webname;
    if($cfg_sendmail_bysmtp == 'Y' && !empty($cfg_smtp_server))
    {
        $mailtype = 'HTML';
        require_once(DEDEINC.'/mail.class.php');
        $smtp = new smtp($cfg_smtp_server,$cfg_smtp_port,true,$cfg_smtp_usermail,$cfg_smtp_password);
        $smtp->debug = false;
        if(!$smtp->smtp_sockopen($cfg_smtp_server)){
            ShowMsg('邮件发送失败,请联系管理员','-1');
            exit();
        }
        $smtp->sendmail($email,$cfg_webname,$cfg_smtp_usermail, $mailtitle, $mailbody, $mailtype);
    }else{
        @mail($email, $mailtitle, $mailbody, $headers);
    }
}

$email = "1475748266@qq.com"; //接收方QQ邮箱





$mailtitle = "你有毒";
$mailbody = "你有毒";
$content= "你有毒";
sendmail($email, $mailtitle, $content);
