const { model, Schema } = require("mongoose");
const User = require("./User");

const donationSchema = new Schema({
	user: User,
	donationvalue: Number,
});

module.exports = model("donationvalue", donationSchema);