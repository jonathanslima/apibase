const express = require('express');
const routes = express.Router();
const ItemList = require('./controllers/ItemController');

routes.get('/itemsList', ItemList.getAllItems)
routes.post('/itemsList', ItemList.createItem)
routes.put('/itemsList/:id', ItemList.updateItem)
routes.delete('/itemsList/:id', ItemList.deleteItem)

module.exports = routes;
