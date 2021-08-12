const { model, Schema } = require("mongoose");

const purchaseSchema = new Schema({
	username: String,
	tickettype: String,
	price: Number
	
	
});

module.exports = model("purchase", purchaseSchema);