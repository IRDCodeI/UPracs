/*const http = require('http');
const server =  http.createServer( (req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo Web');
});

server.listen(3000, () => {
    console.log('Servidor escuchando el puerto 3000');
});*/

const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Worlds');
})

app.listen(port, () => {
    console.log(`Ejemplo de app escuchando el puerto ${port}`);
})