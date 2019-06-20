const mongoose = require('mongoose');
const itemModel = mongoose.model('Item');

module.exports = {
	async createItem(req, res){ // New Item
	    const Item = await itemModel.create(req.body);
	    return res.json(Item);
	},
}