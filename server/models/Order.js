const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
	purchaseDate: {
		type: Date,
		default: Date.now,
	},
	tickets: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Ticket',
		},
	],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
