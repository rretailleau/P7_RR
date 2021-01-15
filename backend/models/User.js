const sql = require('./db.js');
const User = function(user) {
    this.pseudo = user.pseudo;  
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.fonction = user.fonction;
    this.mail = user.mail;     
}
User.abcd = (aaa, result) => {
    sql.query("SELECT * FROM User_p7 WHERE id=?", aaa, (err, res) => {
        console.log('res', res);
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
        }
        
    })
};

User.findOneByPseudo = (pseudo, result) => {
    sql.query("SELECT * FROM Users WHERE pseudo=?", pseudo, (err, res) => {
        console.log('res', res);
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
        }
        
    })
};

module.exports = User;