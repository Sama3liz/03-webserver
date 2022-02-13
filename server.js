const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Home',
        nombre: "Alexander",

    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        titulo: "Acerca"
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});