var condition =  zf.price - qn.price

if(condition >= 3500){  //閾値をセット
  
 var spread_alert = "Zaif"+"("+zf.price+")"+"とQuoine"+"("+qn.price+")"+"との価格差が"+Math.floor(condition)+"円になったわよ!! はやくサヤ取りしなさいよ!!";　　//マーケットティッカーをセット
    }
 else{var spread_alert = "not_enough";
    };
  
function send_alert() {
  if(spread_alert != "not_enough"){
    
  MailApp.sendEmail({
    to: email_address,
    subject: spread_alert,
    body: spread_alert, 
    name: "xxxxxxxx", //送信者名
    noReply: true    // google appsアカウントを使用する場合にnoReplyアドレスから送信するオプション。通常のGmailアカウントを使用する場合は行ごと削除。
  });
    
  Logger.log(spread_alert);
  }
}



