const sql = require('./db.js');
const Article = function(article) {
    this.title = article.title;
    this.media = article.media;
    this.contenu = article.contenu;     
}

Article.find = (result) => {
    sql.query("SELECT * FROM Articles", (err, res) => {
        console.log('res', res);
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
        }
        
    })
};

Article.create = (user, result) => {
    console.log(user);
    sql.query("INSERT INTO Articles SET ?" , article, (err, res) => {
        console.log('res', res);
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
        }
        
    })
};

Article.findOneByTitle = (title, result) => {
    sql.query("SELECT * FROM Articles WHERE title=?", title, (err, res) => {
        console.log('res', res);
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
        }
        
    })
};

module.exports = Article;