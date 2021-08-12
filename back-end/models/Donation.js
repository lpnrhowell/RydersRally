const { model, Schema } = require("mongoose");

const donationSchema = new Schema({
	username: String,
	donationvalue: Number
	
	
});

module.exports = model("donationvalue", donationSchema);