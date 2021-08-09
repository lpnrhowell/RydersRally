const { model, Schema } = require("mongoose");

const clubSchema = new Schema({
	name: String,
	city: String,
	state: String,

});

module.exports = model("Clubs", clubSchema);
