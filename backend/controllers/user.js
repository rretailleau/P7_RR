const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const sql = require('../models/db');
exports.signup = (req,res,next) => {
    // 1 = req.body.id
    User.abcd(1,(err,data)=>{
        res.send(data);
    });
};

// finir bcken  route get: si id compare pseudo pasword