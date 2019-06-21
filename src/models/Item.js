const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const itemSchema = new mongoose.Schema({
	nome: {
		required: true,
		type: String
	}
});

itemSchema.plugin(paginate);
mongoose.model('Item', itemSchema);
