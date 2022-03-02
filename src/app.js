// Módulos
const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter')

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(mainRouter);

app.listen(5000, () => { console.log('Servidor arriba en el puerto 5000 🤓👌');})