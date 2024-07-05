// Importación de Express
const express = require('express');
const defaultRouter = require('./routes/routesapp')
// Creación de una instancia de Express
const app = express();
app.use(express.json());
// Importación del enrutador de Express
//const router = express.Router();

app.use('/v1', defaultRouter);
// Puerto en el que escuchará el servidor
const port = 3000;


// Inicialización del servidor Express
app.listen(port, () => {
    // Imprime un mensaje en la consola cuando el servidor se inicia correctamente
    console.log(`Servidor escuchando en el puerto ${port}`);
});
