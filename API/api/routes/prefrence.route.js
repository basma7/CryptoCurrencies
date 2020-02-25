const router = require("express").Router();
const { getID } = require("../../authorize/getIdUser");
const {addCryptoPref, deleteCryptoPref, getCMID, getCryptoPref} = require("../controllers/prefrence.controller");


//get all the Crypto added by User
router.get("/getCM", getID, getCMID);

//get Crypto informations for user from Prefrences
router.get("/getCryptopre", getID, getCryptoPref);

//Add Crypto to prefrences
router.post("/addCryptopre", getID, addCryptoPref);

//delete Crypto from prefrences
router.delete("/deleteCryptoPref", getID, deleteCryptoPref);

module.exports = router;
