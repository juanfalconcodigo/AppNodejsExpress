const express = require('express');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers')
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales')

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Juan Diego Falcón Córdova'
            /* ,
                            anio: new Date().getFullYear() */
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Juan DiegO Falcón Córdova'
    });
});

app.listen(port, () => {
    console.log(`Se esta corriendo correctamente en el puerto ${port}`)
});