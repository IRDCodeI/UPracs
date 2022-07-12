const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//*Prac 006
//Entregar
app.get('/misitio', (req, res) => {
    res.send('Bienvenido a mi sitio web');
});

app.get('/misitio/about', (req, res, next) => {
    res.send('<h1>Acerca de nosotros</h1>');
});

app.get('/misitio/gastos', (req, res) => {
    res.json({
        'gasto': 'Salud',
        'monto': 17575.60, 
        'informacion': 'Corresponde a consulta medicas, pagos de seguros, medicinas'
    })
});

//Enviar
app.post('/misitio/calculo', (req, res) => {
    console.log(req.body);
    res.send('Calculo impuesto a la renta');
});

app.post('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});

//Actualizar
app.put('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario Actualizado');
});

//Eliminar
app.delete('/misitio/usuario/:id', (req, res) => {
    res.send('Usuario ' + (req.params.id) + ' borrado')
})

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port);
});