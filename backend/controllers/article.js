const Article = require('../models/Article')

  // POST /api/sauces 
//exports.newArticle = (req, res, next) => {};  newArticle.create(){};

  // GET api/ Renvoie le tableau de toutes les sauces dans la base de données


  // GET api/sauce/:id Renvoie la sauce avec l'ID fourni
//exports.getOneArticle = (req, res, next) => {
  //.findOne({ _id: req.params.id })
  //  .then(articles => res.status(200).json(sauce))
  //  .catch(error => res.status(404).json({ error }));
//};
exports.getAllArticles = (req, res, next) => {
  Article.find((err,result)=>{
      if (!result){
          return res.status(401).json({
              error:'probleme'
          })
      }
        res.status(200).json(
          result
        );   
        console.log('ddd');      
  });
};
