const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ravayo71',
    database: 'p7_rr'
});
//Ouverture de la connection MySQL
connection.connect(error => {
    if (error) throw error;
    console.log('Connexion à la base de données réussie !')
});

module.exports = connection;