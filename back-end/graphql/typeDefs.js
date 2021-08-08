const { gql } = require("apollo-server");

module.exports = gql`
	type Restaurant {
		borough: String
		cuisine: String
		name: String
	}
	type Query {
		getRestaurants: [Restaurant]
	}
`;
