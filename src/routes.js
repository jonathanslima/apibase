const express = require('express');
const routes = express.Router();
const ItemList = require('./controllers/ItemController');

routes.get('/itemsList', ItemList.createItem)

module.exports = routes;
