/*
Importer les composants serveur
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const ejs = require('ejs');

    // Inner
    const frontRouter = require('./routes/front.router');
//

/*
Configuration du serveur
*/
    // Définir les variables serveur
    const server = express();
    const port = process.env.PORT;

    // Configuration du moteur de rendu
    server.engine( 'html', ejs.renderFile );
    server.set('view engine', 'html'); 

    // Définition du dossier static du client
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Configurration de body-parser
    server.use(bodyParser.json({limit: '10mb'}));
    server.use(bodyParser.urlencoded({ extended: true }));

    // Utilisation des routers
    server.use('/', frontRouter);
//

/* 
Lancer le serveur
*/
    server.listen( port, () => console.log(`Server listening on port ${port}`) )
//
// npm init -y

// npm i -s dotenv express path body-parser ejs nodemon

// npm start || nodemon start