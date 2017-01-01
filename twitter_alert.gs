// 認証を行う（必須） 関数を実行し、ログに表示されるURLにアクセスして認証する。
function authorize() {
  twitter.authorize();
}

// 認証をリセット　必要に応じて認証をリセットする関数。
function reset() {
  twitter.reset();
}

// 認証後のコールバック（必須）特に触る必要はない。
function authCallback(request) {
  return twitter.authCallback(request);
}

/*
if(max_spread >= 1000){
var spread_alert = "#BTCスプレッドアラート "+market[0]["name"]+"（高）と"+market[4]["name"]+"（安）の価格差が"+Math.floor(max_spread)+"円になったわよ!! はやくサヤ取りしなさいよ!!";
    }
else{var spread_alert = 0;
    }
    
*/

/* タイムラインを取得 //タイムラインから条件を取得する場合に使用する。
function getUserTimeline() {
  var service  = twitter.getService();
  var response = service.fetch('https://api.twitter.com/1.1/statuses/user_timeline.json');
  Logger.log(JSON.parse(response));
};*/

// ツイートを投稿　//この場合、market.gsで作成した配列をそのままツイートする。
function postUpdateStatus() {
  if(spread_alert != 0){
    
  var service  = twitter.getService();
  var response = service.fetch('https://api.twitter.com/1.1/statuses/update.json', {
    method: 'post',
    payload: { status: spread_alert}
  });
  Logger.log(JSON.parse(response));
  }
}
