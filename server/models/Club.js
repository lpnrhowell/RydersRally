const mongoose = require('mongoose');

const { Schema } = mongoose;

const clubSchema = new Schema({
	clubName: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	contactInfo: {
		type: String,
		required: true,
	},
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;
