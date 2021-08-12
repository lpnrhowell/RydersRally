const { model, Schema } = require("mongoose");

const charitySchema = new Schema({
	name: String,
	date: String,
	description: String,
    features: String

});

module.exports = model("Charity", charitySchema);

//description ie the description of what the charity is for
//features things you will get to do by attending
