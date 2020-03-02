## Install

    npm install --save-dev nodemon

## Run the app

    nodemon app

# REST API
    http://localhost:3000/api/users

    The REST API of the CryptoCurrencies Application.

**Get all the Users**
----
  Returns json data about all the users onely by admin.

* **URL**
  /

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `Token=[String]`

* **Data Params**
  
  None
   
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `"success": 1,"data": [ {"id": 1, "admin": 0, "nickname": "user@gmail.com", "email": "user@gmail.com",    "currency": "EUR"},{...}..`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED :<br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

**Get an User by his ID**
----
  Returns json data about an user.

* **URL**

  /profile/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
    
    `id=[Integer]`
    `Token=[String]`

* **Data Params**
  
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id": 1, "admin": 0, "nickname": "user@gmail.com", "email": "user@gmail.com", "currency": "EUR"},`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

  OR

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
    

**Update User**
----
  Update the user's informations by the owner.

* **URL**

  /profile

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
`{ "id": 1,	"nickname": "Dan", "email": "Dan@gmail.com",	"password": "Dan", "currency": "EUR"}`

* **Data Params**

`Token=[String]`
   
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, "message": "updated successfully" },`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

  OR

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
    

**Register User**
----
  Crete a new user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
`[{"email": "Dan@gmail.com", "password": "topsecret" }]`

* **Data Params**

None 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1,"data": {"fieldCount": 0, "affectedRows": 1, "insertId": 15, "serverStatus": 2,"warningCount": 0, "message": "", "protocol41": true, "changedRows": 0}}`
 
* **Error Response:**

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
    
**Login User**
----
  Login user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
`{"email": "Dan@gmail.com", "password": "topsecret" }`

* **Data Params**

None 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, "message": "login successfully", "token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEyLCJhZG1pbiI6MCwibmlja25hbWUiOiJuaWNrbmFtZUBnbWFpbC5jb20iLCJlbWFpbCI6Im5pY2tuYW1lQGdtYWlsLmNvbSIsImN1cnJlbmN5IjoiRVVSIn0sImlhdCI6MTU4MDc0NjkwOSwiZXhwIjoxNTgwNzUwNTA5fQ.EWigIOKCQnUkpjSuUz17KoDGEIReQ3Nknd3BXeirAzQ" }`
 
* **Error Response:**

  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"data": "Sorry, it's invalid email or password"}`

######################################################################################

**Get all the CMID**
----
  Get all the crypto code added by the Admins

* **URL**

  /getCMID

* **Method:**

  `GET`
  
*  **URL Params**
  
  * **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, "data": [ { "CMID": "BTC" },{ "CMID": "LTC" },{ "CMID": "XRP" } ]}`
 
* **Error Response:**

  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"message": "Access Denied! Unauthorized User"}`
    

**Get informations with Crypto-Currency ID**
----
  Get all the informations about a list of crypto currency ()CMID 

* **URL**
    /cryptos/:cmid 

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 
    **Content:** `{`
    `"success": 1,`
    `"data": {`
     `   "Message": "Success",`
      `  "Type": 100,`
       ` "Data": [`
        `    {`
         `       "CoinInfo": {`
          `          "Id": "1182",`
           `         "Name": "BTC",`
            `        "FullName": "Bitcoin",`
             `       "Internal": "BTC",`
              `      "ImageUrl": "/media/19633/btc.png",`
               `     "Url": "/coins/btc/overview",`
                `    "Algorithm": "SHA-256",`
                 `   "ProofType": "PoW",`
                  `  "NetHashesPerSecond": 110712337877.718,`
                   ` "BlockNumber": 615816,`
                    `"BlockTime": 600,`
                    `"BlockReward": 12.5,`
                    `"Type": 1,`
                    `"DocumentType": "Webpagecoinp"`
               ` },`
                `"ConversionInfo": {`
                 `   "Conversion": "direct",`
                  `  "ConversionSymbol": "",`
                   ` "CurrencyFrom": "BTC",`
                    `"CurrencyTo": "EUR",`
                    `"Market": "CCCAGG",`
                    `"Supply": 18197712,`
                    `"TotalVolume24H": 287737.22882959724,`
                    `"TotalTopTierVolume24H": 183413.2243231021,`
                    `"SubBase": "5~",`
                    `"SubsNeeded": [`
                     `   "5~CCCAGG~BTC~EUR"`
                    `],`
                    `"RAW": [`
                        `"5~CCCAGG~BTC~EUR~2050~8380.55~1580748699~8395.57~0.00485418~40.6285643058~104262809~5174.323535850172~43781023.7545684~6734.037698429997~57024048.46943666~8419.64~8647.68~8374.74~8501.03~8663.36~8367.97~Bitstamp~366.4549743200005~3076823.122292663~8396.3~8436.52~8374.74~6160.093212319997~52153215.27978585~3fffff9"`
                  `  ]`
               ` }`
          `  },`

  * **For more informations:** please check the API Documentation https://min-api.cryptocompare.com/documentation

* **Error Response:**
*  **code:** 200
`{    "success": 1,    "data": {"Response": "Error","Message": "There is no data for any of the toSymbol/s HY .",`
`        "HasWarning": true,`
`        "Type": 2,`
`        "RateLimit": {},`
`        "Data": {},`
`        "Warning": "There is no data for the toSymbol/s HY ",`
`        "ParamWithError": "fsyms"`
`    }`
`}`
  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"data": "Error"}`

**Get all the informations**
----
  Get all the informations about a list of crypto currency added by admins

* **URL**
    /cryptos/cmids

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 
    **Content:** `{`
    `"success": 1,`
    `"data": {`
     `   "Message": "Success",`
      `  "Type": 100,`
       ` "Data": [`
        `    {`
         `       "CoinInfo": {`
          `          "Id": "1182",`
           `         "Name": "BTC",`
            `        "FullName": "Bitcoin",`
             `       "Internal": "BTC",`
              `      "ImageUrl": "/media/19633/btc.png",`
               `     "Url": "/coins/btc/overview",`
                `    "Algorithm": "SHA-256",`
                 `   "ProofType": "PoW",`
                  `  "NetHashesPerSecond": 110712337877.718,`
                   ` "BlockNumber": 615816,`
                    `"BlockTime": 600,`
                    `"BlockReward": 12.5,`
                    `"Type": 1,`
                    `"DocumentType": "Webpagecoinp"`
               ` },`
                `"ConversionInfo": {`
                 `   "Conversion": "direct",`
                  `  "ConversionSymbol": "",`
                   ` "CurrencyFrom": "BTC",`
                    `"CurrencyTo": "EUR",`
                    `"Market": "CCCAGG",`
                    `"Supply": 18197712,`
                    `"TotalVolume24H": 287737.22882959724,`
                    `"TotalTopTierVolume24H": 183413.2243231021,`
                    `"SubBase": "5~",`
                    `"SubsNeeded": [`
                     `   "5~CCCAGG~BTC~EUR"`
                    `],`
                    `"RAW": [`
                        `"5~CCCAGG~BTC~EUR~2050~8380.55~1580748699~8395.57~0.00485418~40.6285643058~104262809~5174.323535850172~43781023.7545684~6734.037698429997~57024048.46943666~8419.64~8647.68~8374.74~8501.03~8663.36~8367.97~Bitstamp~366.4549743200005~3076823.122292663~8396.3~8436.52~8374.74~6160.093212319997~52153215.27978585~3fffff9"`
                  `  ]`
               ` }`
          `  },`

  * **For more informations:** please check the API Documentation https://min-api.cryptocompare.com/documentation

* **Error Response:**
*  **code:** 200
`{    "success": 1,    "data": {"Response": "Error","Message": "There is no data for any of the toSymbol/s HY .",`
`        "HasWarning": true,`
`        "Type": 2,`
`        "RateLimit": {},`
`        "Data": {},`
`        "Warning": "There is no data for the toSymbol/s HY ",`
`        "ParamWithError": "fsyms"`
`    }`
`}`
  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"data": "Error"}`


**Get all the informations with period**
----
  Get all the informations about a list of crypto currency with precised period of time

* **URL**
    /cryptos/:cmid/history/:period

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `Token=[String]`

* **Data Params**

    `cmid=[String]`
    `period=[String]`

* **Exemple**
    [/cryptos/BTC/history/histoday](http://localhost:3000/api/users/cryptos/BTC/history/histohour)
     http://localhost:3000/api/users/cryptos/BTC/history/histoday


* **Success Response:**

  * **Code:** 200 
    **Content:** 

  * **For more informations:** please check the API Documentation
  *  https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataSymbolHistohour

* **Error Response:**
*  **code:** 200
`{    "success": 1,    "data": {"Response": "Error","Message": "There is no data for any of the toSymbol/s HY .",`
`        "HasWarning": true,`
`        "Type": 2,`
`        "RateLimit": {},`
`        "Data": {},`
`        "Warning": "There is no data for the toSymbol/s HY ",`
`        "ParamWithError": "fsyms"`
`    }`
`}`
  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"data": "Error"}`

**Delete a cryptoCurrencies**
----
  delete a the crypto Currency code

* **URL**

  /cryptos

* **Method:**

  `DELETE`
  
*  **URL Params**
  
  * **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, "data": }`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

  OR

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
    
 
**Add a new crypto currency code**
----
  Crete a new crypto currency code by Admin

* **URL**

  /cryptos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
  `{	"CMID": "LTC",	"go": 0 }`
  `Token=[String]`


* **Data Params**

  None 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1,"data": {"fieldCount": 0, "affectedRows": 1, "insertId": 15, "serverStatus": 2,"warningCount": 0, "message": "", "protocol41": true, "changedRows": 0}}`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

  OR

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
   

   Articles










**Get all the informations**
----
  Get all the articles about a list of crypto currency

* **URL**
* 
    /articles

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `Token=[String]`

* **Data Params**

   `lang=EN`

* **Success Response:**

  * **Code:** 200 
    **Content:** `{}`

  * **For more informations:** please check the API Documentation https://min-api.cryptocompare.com/documentation

* **Error Response:**
*  **code:** 200
`{    "success": 1,    "data": {"Response": "Error","Message": "There is no data for any of the toSymbol/s HY .",`
`        "HasWarning": true,`
`        "Type": 2,`
`        "RateLimit": {},`
`        "Data": {},`
`        "Warning": "There is no data for the toSymbol/s HY ",`
`        "ParamWithError": "fsyms"`
`    }`
`}`
  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"data": "Error"}`



**Delete a cryptoCurrencie from prefrences liste**
----
  delete a the crypto Currency code from prefrences liste of a user with their ID

* **URL**

  /addCryptopre

* **Method:**

  `DELETE`
  
*  **URL Params**
  
  * **Required:**
  
    `{"CMID": "RTX"}`
    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1,"message": "crypto deleted successfully" }`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

  OR

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
    

**Add Favorite crypto currency to prefrences liste of an user**
----
  Crete a new crypto currency in an user list.

* **URL**

  /addCryptopre

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
  `{"CMID": "RTX"}`
  `Token=[String]`

* **Data Params**

  None 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1,"data": {"fieldCount": 0, "affectedRows": 1, "insertId": 15, "serverStatus": 2,"warningCount": 0, "message": "", "protocol41": true, "changedRows": 0}}`

* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
    **Content:** `{ "success": 0, "message": "Invalid Token..."}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

**Get the CMID ADDED By USER TO PREFRENCES**
----
  Get all the crypto code added by the user in his prefrencence list

* **URL**

  /getCM

* **Method:**

  `GET`
  
*  **URL Params**
  
  * **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, "data": [ { "CMID": "BTC" },{ "CMID": "LTC" },{ "CMID": "XRP" } ]}`
 
* **Error Response:**

  * **Code:** 200 Not found <br />
    **Content:** `{"success": 0,"message": "Access Denied! Unauthorized User"}`
    
**Get all the informations**
----
  Get all the informations about the list of crypto currency added by user

* **URL**
    /getCryptopre

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 
    **Content:** `{`
    `"success": 1,`
    `"data": {`
        `"RAW": {`
            `"BTC": {`
                `"EUR": {`
                    `"TYPE": "5",`
                    `"MARKET": "CCCAGG",`
                    `"FROMSYMBOL": "BTC",`
                    `"TOSYMBOL": "EUR",`
                    `"FLAGS": "2050",`
                    `"PRICE": 8320.89,`
                    `"LASTUPDATE": 1582726603,`
                    `"MEDIAN": 8357.0471,`
                    `"LASTVOLUME": 0.2334801,`
                    `"LASTVOLUMETO": 1944.72579693,`
                    `"LASTTRADEID": "1582726603.8181",`
                    `"VOLUMEDAY": 8317.096453220647,`
                    `"VOLUMEDAYTO": 69936294.58599545,`
                    `"VOLUME24HOUR": 12745.212905919996,`
                    `"VOLUME24HOURTO": 107963751.7858949,`
                    `"OPENDAY": 8532.28,`
                    `"HIGHDAY": 8594.6,`
                    `"LOWDAY": 8275.43,`
                    `"OPEN24HOUR": 8666.76,`
                    `"HIGH24HOUR": 8695.4,`
                    `"LOW24HOUR": 8268.73,`
                    `"LASTMARKET": "Kraken",`
                    `"VOLUMEHOUR": 443.81374571999834,`
                    `"VOLUMEHOURTO": 3694909.2780740554,`
                    `"OPENHOUR": 8346.11,`
                    `"HIGHHOUR": 8372.46,`
                    `"LOWHOUR": 8275.43,`
                    `"TOPTIERVOLUME24HOUR": 12322.571859289992,`
                    `"TOPTIERVOLUME24HOURTO": 104591678.27957633,`
                    `"CHANGE24HOUR": -345.8700000000008,`
                    `"CHANGEPCT24HOUR": -3.9907647148415415,`
                    `"CHANGEDAY": -211.39000000000124,`
                    `"CHANGEPCTDAY": -2.477532382903529,`
                    `"CHANGEHOUR": -25.220000000001164,`
                    `"CHANGEPCTHOUR": -0.3021767026794658,`
                    `"SUPPLY": 18238437,`
                    `"MKTCAP": 151760028048.93,`
                    `"TOTALVOLUME24H": 539275.1054122547,`
                    `"TOTALVOLUME24HTO": 4489161069.042931,`
                    `"TOTALTOPTIERVOLUME24H": 299589.14889881323,`
                    `"TOTALTOPTIERVOLUME24HTO": 2494905266.5019746,`
                    `"IMAGEURL": "/media/19633/btc.png",`
                    `"CONVERSIONTYPE": "direct",`
                    `"CONVERSIONSYMBOL": ""`
                `}`
            `}`
        `},`
        `"DISPLAY": {`
         `   "BTC": {`
          `      "EUR": {`
           `         "FROMSYMBOL": "Ƀ",`
            `        "TOSYMBOL": "€",`
             `       "MARKET": "CryptoCompare Index",`
              `      "PRICE": "€ 8,320.89",`
               `     "LASTUPDATE": "Just now",`
                `    "LASTVOLUME": "Ƀ 0.2335",`
                 `   "LASTVOLUMETO": "€ 1,944.73",`
                  `  "LASTTRADEID": "1582726603.8181",`
                   ` "VOLUMEDAY": "Ƀ 8,317.10",`
                    `"VOLUMEDAYTO": "€ 69,936,294.6",`
                    `"VOLUME24HOUR": "Ƀ 12,745.2",`
                    `"VOLUME24HOURTO": "€ 107,963,751.8",`
                    `"OPENDAY": "€ 8,532.28",`
                    `"HIGHDAY": "€ 8,594.60",`
                    `"LOWDAY": "€ 8,275.43",`
                    `"OPEN24HOUR": "€ 8,666.76",`
                    `"HIGH24HOUR": "€ 8,695.40",`
                    `"LOW24HOUR": "€ 8,268.73",`
                    `"LASTMARKET": "Kraken",`
                    `"VOLUMEHOUR": "Ƀ 443.81",`
                    `"VOLUMEHOURTO": "€ 3,694,909.3",`
                    `"OPENHOUR": "€ 8,346.11",`
                    `"HIGHHOUR": "€ 8,372.46",`
                    `"LOWHOUR": "€ 8,275.43",`
                    `"TOPTIERVOLUME24HOUR": "Ƀ 12,322.6",`
                    `"TOPTIERVOLUME24HOURTO": "€ 104,591,678.3",`
                    `"CHANGE24HOUR": "€ -345.87",`
                    `"CHANGEPCT24HOUR": "-3.99",`
                    `"CHANGEDAY": "€ -211.39",`
                    `"CHANGEPCTDAY": "-2.48",`
                    `"CHANGEHOUR": "€ -25.22",`
                    `"CHANGEPCTHOUR": "-0.30",`
                    `"SUPPLY": "Ƀ 18,238,437.0",`
                    `"MKTCAP": "€ 151.76 B",`
                    `"TOTALVOLUME24H": "Ƀ 539.28 K",`
                    `"TOTALVOLUME24HTO": "€ 4.49 B",`
                    `"TOTALTOPTIERVOLUME24H": "Ƀ 299.59 K",`
                    `"TOTALTOPTIERVOLUME24HTO": "€ 2.49 B",`
                    `"IMAGEURL": "/media/19633/btc.png",`
                    `"CONVERSIONTYPE": "direct",`
                    `"CONVERSIONSYMBOL": ""`
                `}`
            `}`
        `}`
    `}`
`}`

  * **For more informations:** please check the API Documentation https://min-api.cryptocompare.com/documentation

* **Error Response:**
*  **code:** 400 that means that you're an ADMIN 
`{    "success": 1,    "data": {"Response": "Error","Message": "There is no data for any of the toSymbol/s HY .",`
`        "HasWarning": true,`
`        "Type": 2,`
`        "RateLimit": {},`
`        "Data": {},`
`        "Warning": "There is no data for the toSymbol/s HY ",`
`        "ParamWithError": "fsyms"`
`    }`
`}`
  * **Code:** 400 Not found <br />
    **Content:** `{"success": 0,"data": "Error"}`


**Get the Keywords of an user**
----
  Get all the Keywords added by the user in his prefrencence list

* **URL**

  /keywords

* **Method:**

  `GET`
  
*  **URL Params**
  
  * **Required:**

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, {`
     `   "fieldCount": 0,`
     `   "affectedRows": 1,`
     `   "insertId": 4,`
     `   "serverStatus": 2,`
     `   "warningCount": 0,`
     `   "message": "",`
     `   "protocol41": true,`
     `   "changedRows": 0`
    `}`
 
* **Error Response:**

  * **Code:** 200 NOT FOUND <br />
  **Content:** `{ "success": 0, "message": "Invalid Token..."}`