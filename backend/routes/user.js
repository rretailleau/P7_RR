const express = require('express');
const router = express.Router();
const verifyPassword = require('../middleware/verifyPassword')

const userCtrl = require('../controllers/user');

// post
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// get
router.get('/abc', userCtrl.abc);

module.exports = router;