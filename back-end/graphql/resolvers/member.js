const { AuthenticationError, UserInputError } = require("apollo-server");

const Club = require("../../models/Member");

module.exports = {
	Query: {
		async getClubs() {
			try {
				const members = await Member.find();
				return members;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};