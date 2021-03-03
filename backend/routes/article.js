const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article');

// post
//router.post('/', userCtrl.newArticle);

// get
router.get('/', articleCtrl.getAllArticles);

module.exports = router;


module.exports = router;