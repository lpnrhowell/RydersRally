const { AuthenticationError, UserInputError } = require("apollo-server");

const Club = require("../../models/Club");

module.exports = {
	Query: {
		async getClubs() {
			try {
				const clubs = await Club.find();
				return clubs;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
