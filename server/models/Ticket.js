const mongoose = require('mongoose');

const { Schema } = mongoose;

const purchaseSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
	},
	club: {
		type: String,
		required: true,
		id: Schema.Types.ObjectId,
	},
	price: {
		type: Number,
		required: true,
		min: 0.99,
	},
	quantity: {
		type: Number,
		min: 0,
		default: 0,
	},
});

const Ticket = mongoose.model('Ticket', purchaseSchema);

module.exports = Ticket;
