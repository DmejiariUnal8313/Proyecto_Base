// Importa el módulo express para crear la aplicación web.
const express = require('express');
// Crea una instancia de la aplicación Express.
const app = express();
// Importa el módulo mysql2 para conectarse a la base de datos MySQL.
const mysql = require('mysql2');
// Se puede usar dotenv para cargar variables de entorno desde un archivo .env (actualmente comentado).
// require('dotenv').config();

// Middleware: intercambiador de información
// Middleware para analizar el cuerpo de las solicitudes JSON.
app.use(express.json());
// Middleware para servir archivos estáticos desde el directorio 'pag'.
app.use(express.static('pag'));
// Middleware para servir archivos JavaScript desde 'src/js' bajo la ruta '/js'.
app.use('/js', express.static('src/js'));
// Middleware para servir archivos CSS desde 'src/css' bajo la ruta '/css'.
app.use('/css', express.static('src/css'));
// Middleware para servir archivos de imágenes desde 'src/image' bajo la ruta '/image'.
app.use('/image', express.static('src/image'));


// Configuración de la conexión a la base de datos MySQL.
const connection = mysql.createConnection({
    host: 'localhost', // Dirección del servidor de la base de datos.
    user: 'admin', // Nombre de usuario para conectarse a la base de datos.
    password: 'admin', // Contraseña para el usuario de la base de datos.
    database: 'pizzeria' // Nombre de la base de datos a la que se va a conectar.
});

// Establece la conexión con la base de datos.
connection.connect((err) => {
    if (err) {
        // Si hay un error al conectarse, se imprime en la consola.
        console.error('Error conectando a la base de datos:', err);
        return; // Sale de la función si hay un error.
    }
    // Si la conexión es exitosa, se imprime un mensaje en la consola.
    console.log('Conectado a la base de datos MySQL');
});

// Middleware para pasar la conexión de la base de datos a las rutas.
app.use((req, res, next) => {
    req.connection = connection; // Asigna la conexión a la solicitud.
    next(); // Llama al siguiente middleware o ruta.
});


// Establece el puerto en el que el servidor escuchará. Usa la variable de entorno PORT si está definida, o 3000 por defecto.
const port = process.env.PORT || 3000
// Inicia el servidor y escucha en el puerto definido.
app.listen(port, () => {
    // Imprime un mensaje en la consola indicando que el servidor está corriendo.
    console.log(`Servidor corriendo en http://localhost:${port}`);
});