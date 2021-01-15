const express = require('express');
const router = express.Router();
const verifyPassword = require('../middleware/verifyPassword')

const userCtrl = require('../controllers/user');

router.get('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;