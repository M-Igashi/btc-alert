var condition =  fxprice - bf.price

if(condition >= 10){  //閾値をセット
  
 var alert = "bFFX"+"("+fxprice+")"+"とbF現物"+"("+bf.price+")"+"との価格差が"+Math.floor(condition)+"円になったわよ!! はやくサヤ取りしなさいよ!!";　　//マーケットティッカーをセット
    }
 else{var alert = "not_enough";
    };
  
function send_alert() {
  if(alert != "not_enough"){
    
  MailApp.sendEmail({
    to: email_address,
    subject: alert,
    body: alert, 
    name: "xxxxxxxx"
  });
    
  Logger.log(alert);
  }
}



