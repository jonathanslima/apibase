const mongoose = require('mongoose');
const itemModel = mongoose.model('Item');

module.exports = {
	async getAllItems(req,res){
    const {page = 1} = req.query;
		const allItems = await itemModel.paginate({}, {page, limit: 5});
		return res.json(allItems);
	},
	async createItem(req, res){ // New Item
	    const Item = await itemModel.create(req.body);
	    return res.json(Item);
	},
	async updateItem(req, res){
		const update = await itemModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
		return res.json(update)
	},
	async deleteItem(req, res){
		await itemModel.findByIdAndRemove(req.params.id);
		res.send();
	},

}