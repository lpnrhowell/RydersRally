const { model, Schema } = require("mongoose");

const memberSchema = new Schema({
	name: String,
	serviceYears: String,
	
	
});

module.exports = model("Members", memberSchema);
