const express = require('express');
const router = require('express-promise-router');
const ArticlesController = require('../controllers/articles');

/**
* get article with params
**/

router.route('/',(req,res) =>{
}).get(ArticlesController.articles);



module.exports = router;