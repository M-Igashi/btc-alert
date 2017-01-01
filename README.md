# Bitcoin market alert for twitter and email  
A basic script collection for Japanese bitcoin market. It covers five major markets in Japan and includes price tickers and alert triggers utilized for Google Apps Script platform to encourage programing beginners to make their own script.  

## Dependencies 
A Google account is neccessary for Google Apps Script (GAS) implementation. You can create a new project from Google Drive --> New --> Add new application.    
In GAS, you need to include [TwitterWebService](https://gist.github.com/M-Igashi/750ab08718687d11bff6322b8d6f5d90) library; simply adding `1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xTF` from Resource --> Library section.
## Approach 
### market.gs
This script is a collection of market data.  
Market tickers: bf = bitFlyer, qn = Quoine, bb = BtcBox, zf = Zaif, cc = coincheck  
Objects: "name" = name of the market, "price" = last traded price in each market e.c. bitFlyer's price is bfprice.  
A variable "market" is an arrey of tickers sorted descendingly. You can use it for such as ranking and market spread.
### secret.gs
An empty script file to input Twitter API secrets and email address
### email_alert.gs  
A script for sending email alert. You can set up conditions and contents of the alert by using market.gs tickers.
### twitter_alert.gs
Twitter authorization procedure and tweet script.
