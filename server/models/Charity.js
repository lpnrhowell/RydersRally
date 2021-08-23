const { model, Schema } = require('mongoose');

const charitySchema = new Schema({
	charityName: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	goal: {
		type: String,
	},
});

module.exports = model('Charity', charitySchema);

//description ie the description of what the charity is for
//features things you will get to do by attending
