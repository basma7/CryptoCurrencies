const router = require("express").Router();
const { checkAdmin } = require("../../authorize/authorize");

const {
  getCMID,
  getCryptos,
  getCrypto,
  getCryptoPeriod,
  addCurrency,
  deleteCrypto
} = require("../controllers/crypto.controller");


//Get the list of crypto-currencies and their informations
router.get("/cryptos/getCMID", checkAdmin, getCMID);

//Get the list of crypto-currencies and their informations
router.get("/cryptos/cmids", checkAdmin, getCryptos);

//
router.get("/cryptos/:cmid", getCrypto);

//Get the price history of a cryptocurrency
router.get("/cryptos/:cmid/history/:period", getCryptoPeriod);

//Add a cryptocurrency to your platform
router.post("/cryptos", checkAdmin, addCurrency);

// Deletes a cryptocurrency
router.delete("/cryptos", checkAdmin, deleteCrypto);

module.exports = router;
