const clubsResolvers = require("./clubs");
const usersResolvers = require("./users");
const bcrypt = require("bcryptjs");

module.exports = {
	Query: {
		...clubsResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
	},
};
