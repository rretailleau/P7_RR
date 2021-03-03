const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken');


exports.signup = (req,res,next) => {
 console.log(req.body)
 bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user= new User({
      pseudo:req.body.pseudo,
      mail:req.body.mail,
      password:hash
    });

    User.create(user,(err,data)=>{
      res.send(data);
    });
  })
  .catch(error => res.status(500).json({ error })); 
};

exports.login = (req, res, next) => {
  User.findOneByPseudo(req.body.pseudo, (err, result)=>{
    if (!result){
        return res.status(401).json({
        error:'utilisateur non trouvé'
        })
      }
      console.log(result[0])
      let newUser=result[0]
      bcrypt.compare(req.body.password, newUser.password)
      .then(valid => {    
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log('ccc');
          res.status(200).json({
            user: newUser,
            token: jwt.sign(
              { userId: newUser.id, 
                isAdmin: newUser.isAdmin,
               },
              'gqvdf',
              { expiresIn: '12h' }
            )
          });
        
        })
        .catch(error => res.status(500).json({ error }));
    })
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