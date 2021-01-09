const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();

// framework pour la plateforme logiciel node
const app = express();
//module securite
app.use(helmet());

// autorisations d'acces
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json()); 

app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;


