const { model, Schema } = require("mongoose");

const userSchema = new Schema({
	username: String,
	password: String
	
	
});

module.exports = model("user", userSchema);