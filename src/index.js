require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {router} = require('./routes')

// Crear una instancia de la aplicación Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router)

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
