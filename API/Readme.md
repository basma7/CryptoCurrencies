## Install

    npm install --save-dev nodemon

## Run the app

    nodemon app

# REST API
    http://localhost:3000/api/users

    The REST API of the CryptoCurrencies Application.

**Get all the Users**
----
  Returns json data about all the users.

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

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"success": 0, "message": "Access Denied! Unauthorized User" }`

**Get an User by his ID**
----
  Returns json data about an users.

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
    
**delete an User**
----
  Returns json data about an users.

* **URL**

  /

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
`{"id": 10 }`
`Token=[String]`

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ }`
 
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
  Update the user's informations.

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
 
`{"email": "Dan@gmail.com", "password": "topsecret" }`

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
  Login a new user.

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
    **Content:** `{"success": 0,"data": "Sorry, it's invalid email or password"}`
    

**Get all the informations**
----
  Get all the informations about a list of crypto currency

* **URL**
    /crypto/[?cmids={cm}]

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
  Crete a new crypto currency code

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
  Get all the informations about a list of crypto currency

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

    `Token=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1, "data":{`
       ` "fieldCount": 0,`
       ` "affectedRows": 1,`
       ` "insertId": 56,`
       ` "serverStatus": 2,`
       ` "warningCount": 0,`
       ` "message": "",`
       ` "protocol41": true,`
       ` "changedRows": 0`
   `} }`
 
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
  Crete a new crypto currency.

* **URL**

  /addCryptopre

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
  `{"CMID": "RTX"}`

* **Data Params**

  None 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": 1,"data": {"fieldCount": 0, "affectedRows": 1, "insertId": 15, "serverStatus": 2,"warningCount": 0, "message": "", "protocol41": true, "changedRows": 0}}`
 
* **Error Response:**

  * **Code:** 200 Not found <br />
    **Content:** `{ "success": 0, "message": "Record not Found" }`
  