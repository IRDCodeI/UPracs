const express = require('express');
const app = express();

const port = 3000;

//Motor de Plantillas
app.set('view engine', 'ejs'); //Motor de plantillas EJS
app.set('views', __dirname + '/views');

//Middleware: Funcion que se ejecuta antes de las rutas
app.use(express.static(__dirname + "/public"));

//Rutas
app.get('/', (req, res) => {
    res.render('index', {titulo: "Title"});
  })

app.get('/contact', (req, res) => {
    res.render('contact', {tituloContact: "Contact Titulo"});
})

//Archivo Estatico
app.use((req, res, next) => {
    res.status(404).render("404");
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })