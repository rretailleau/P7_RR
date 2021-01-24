const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken');


exports.signup = (req,res,next) => {
    User.abcd(req.body.id,(err,data)=>{
        res.send(data);
    });
    
};

exports.login = (req, res, next) => {
    User.findOneByPseudo(req.body.pseudo, (err,result)=>{
        if (!result){
            return res.status(401).json({
                error:'utilisateur non trouvé'
            })
        }
        bcrypt.compare(req.body.password, result.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: result.id,
            token: jwt.sign(
              { userId: user.id },
              'gqvdfnvwnv-è_-èT528',
              { expiresIn: '12h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    });
  };


  exports.abc = (req, res, next) => {
    User.abcd((err,result)=>{
        if (!result){
            return res.status(401).json({
                error:'probleme'
            })
        }
          res.status(200).json(
            result
          );         
    });
  };
// finir bcken  route get: si id compare pseudo pasword