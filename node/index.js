const express = require('express');
const app = express();
const sequelize  = require('./database/db');
const Product  = require('./database/models/Product');

const hostname = '127.0.0.1';
const port = 5000;

app.get('/productos', (req, res)=>{
    res.send([{'nombre':"computador"},{'nombre':"teclado"}]);
});

app.listen(port, ()=>{
    sequelize.sync({force:true}).then(()=>{
        console.log('nos hemos conectado a la base de datos');
    }).catch((error)=>{
        console.log('Se ha producido un error',error);
    });
    console.log(`Server running por el puerto ${port}`);
});
