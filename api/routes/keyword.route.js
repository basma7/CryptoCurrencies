const router = require("express").Router();
const { getID } = require("../../authorize/getIdUser");
const { getKeyword, deleteKeyword, addKeyword } = require("../controllers/keyword.controller");


//Get all the Keywords of an user
router.get("/keywords", getID, getKeyword);

//Add a new keyword
router.post("/keyword", getID, addKeyword);

// Deletes a keyword
router.delete("/keyword", getID, deleteKeyword);

module.exports = router;
