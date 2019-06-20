const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	nome: {
		required: true,
		type: String
	}
});

mongoose.model('Item', itemSchema);
