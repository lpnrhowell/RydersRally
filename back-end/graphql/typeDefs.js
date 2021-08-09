const { gql } = require("apollo-server");

module.exports = gql`
	type Club {
		name: String
		city: String
		state: String
	}
	type Query {
		getClubs: [Club]
	}
`;
