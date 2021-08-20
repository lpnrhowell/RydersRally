const { AuthenticationError, UserInputError } = require("apollo-server");

const Club = require("../../models/Charity");

module.exports = {
	Query: {
		async getCharities() {
			try {
				const charities = await Charity.find();
				return charities;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};