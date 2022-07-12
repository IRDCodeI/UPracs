const express = require('express');
const slash = require('express-slash');
const app = express();

//Middleware 3ros
const morgan = require('morgan');
//app.use(morgan('combined'));
app.use(morgan('dev'));
//app.use(express.static('public'));

//Configuracion de valores iniciales
app.set('nombreApp', 'App para manejo de gastos SRI');
app.set('puerto', 4000);

//console.log(app.get('nombreApp'));

//Middleware Adicional
//? Express-Slash: https://github.com/ericf/express-slash

app.enable('strict routing');

var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict       : app.get('strict routing')
});

app.use(router);
app.use(slash());

//Plantilla de JS
app.set('view engine', 'ejs'); //Configuracion de Plantilla EJS
/*
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/home', (req, res) => {
    res.render('home.ejs');
})
*/
router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get('/home/', (req, res) => {
    res.render('home.ejs');
})

router.get('/home/services', (req, res) => {
    res.render('services.ejs');
})

function logger(req, res, next){
    console.log('Ruta Recibida: ' + req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
}

app.listen(app.get('puerto'), () => {
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Servidor en el puerto ', app.get('puerto'));
});