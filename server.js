const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Permite envio de json para o servidor
app.use(express.json());

// Conectar com o banco
mongoose.connect('mongodb://localhost:27017/apibase', {useNewUrlParser: true})

require('./src/models/Item');
app.use('/api', require('./src/routes.js'))

// remover
// app.get('/', (req, res)=> {
// 	res.send('Hello World!');
// });

app.listen('3002', ()=> console.log('server running at localhost:3002'))
