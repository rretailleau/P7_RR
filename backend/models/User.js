const sql = require('./db.js');
const User = function(user) {
    this.pseudo = user.pseudo;  
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.fonction = user.fonction;
    this.mail = user.mail;
    this.password = user.password;      
}
User.abcd = (result) => {
    sql.query("SELECT * FROM Users", (err, res) => {
        console.log('res', res);
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
        }
        
    })	

};

User.create = (newuser, result) => {
  
    sql.query("INSERT INTO Users SET ?", newuser, (err, res) => {
        console.log('res', res);
        console.log(err)
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
        
        if (err) {
            result(err, null);
            return;
        } else {	

            result(null, res);
        }
        
    })
    
};

module.exports = User;