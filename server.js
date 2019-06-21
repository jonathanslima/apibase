const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// const cors = require('cors');

// Iniit server
const app = express();

// Permite envio de json para o servidor
app.use(express.json());
// app.use(cors)

// Conectar com o banco
mongoose.connect('mongodb://localhost:27017/apibase', {useNewUrlParser: true})

// Importação dos models
requireDir('./src/models/');

// Importação das rotas
app.use('/api', require('./src/routes.js'))

app.listen('3002', ()=> console.log('server running at localhost:3002'))