const router = require("express").Router();
const { checkToken } = require("../../auth/token.validation");
const {
  getCryptoCurrencies,
  getCryptoByCMID,
  getCryptoCurrencyPeriod,
  addCurrency,
  deleteCrypto
} = require("../controllers/crypto.controller");

// //Get the list of crypto-currencies and their infos
// router.get("/cryptos[?cmids={cm}]", getCryptoCurrencies);

//Get information about a cryptocurrency
router.get("/crypto/:cmid", getCryptoByCMID);

// //Get the price history of a cryptocurrency
// router.get(
//   "/cryptos/:cmid/history/:period",
//   checkToken,
//   getCryptoCurrencyPeriod
// );

//Add a cryptocurrency to your platform
router.post("/cryptos", addCurrency);

// // Deletes a cryptocurrency
// router.delete("/", checkToken, deleteCrypto);

module.exports = router;
