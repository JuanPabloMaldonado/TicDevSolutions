const express = require('express');
const app = express();
var cors = require('cors');
const sequelize = require('./database/db');


// Setting
const PORT = process.env.PORT || 5000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Rutas
app.get('/', function (req, res) {
    res.json("Hola Mundo");n
});

app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/sales', require('./routes/sales'));


// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});