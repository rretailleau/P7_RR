const express = require('express');
const router = express.Router();
const verifyPassword = require('../middleware/verifyPassword')

const userCtrl = require('../controllers/user');

// post
router.get('/signup', userCtrl.signup);
//
router.get('/abc', userCtrl.abc);

router.post('/login', userCtrl.login);

module.exports = router;