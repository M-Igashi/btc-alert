// 各市場の最終取引価格を取得

var bfdata = UrlFetchApp.fetch('https://api.bitflyer.jp/v1/getticker?product_code=BTC_JPY');
var bfprice = JSON.parse(bfdata)["ltp"];
var bf = {'name' : 'bitFlyer', 'price' : bfprice};

var qndata = UrlFetchApp.fetch('https://api.quoine.com/products/5');
var qnprice = JSON.parse(qndata)["last_traded_price"];
var qn = {'name' : 'Quoine', 'price' : qnprice};

var bbdata = UrlFetchApp.fetch('https://www.btcbox.co.jp/api/v1/ticker/');
var bbprice = JSON.parse(bbdata)["last"];
var bb = {'name' : 'BtcBox', 'price' : bbprice};

var zfdata = UrlFetchApp.fetch('https://api.zaif.jp/api/1/ticker/btc_jpy');
var zfprice = JSON.parse(zfdata)["last"];
var zf = {'name' : 'Zaif', 'price' : zfprice};

var ccdata = UrlFetchApp.fetch('https://coincheck.com/api/ticker');
var ccprice = JSON.parse(ccdata)["last"];
var cc = {'name' : 'coincheck', 'price' : ccprice};

//配列を作成して降順でソート

var market = [bf, qn, bb, zf, cc];

market.sort(function(a,b){
    if(a.price>b.price) return -1;
    if(a.price < b.price) return 1;
    return 0;
});

/* 最高値市場と最安値市場を検出してその市場名と価格差を算出するサンプル。
var spread_market = market[0]["name"] +" "+"-"+" "+market[4]["name"]
var max_spread = market[0]["price"]-market[4]["price"]
*/

// 日付の取得。
var date = Utilities.formatDate(new Date(), "JST", "dd/MM/YYYY-HH:mm");

function test(){
Logger.log(market);}
