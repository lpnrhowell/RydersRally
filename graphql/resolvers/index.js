const clubsResolvers = require("./clubs");
const usersResolvers = require("./users");
const eventsResolvers = require("./events")
const bcrypt = require("bcryptjs");

module.exports = {
	Query: {
		...clubsResolvers.Query,
		...eventsResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
		...eventsResolvers.Mutation,
	},
};