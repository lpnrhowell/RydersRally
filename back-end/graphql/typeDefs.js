const { gql } = require("apollo-server");

module.exports = gql`
	type Club {
		name: String
		city: String
		state: String
	}
	type User {
		id: ID!
		email: String!
		token: String!
		username: String!
		createdAt: String!
	}
	input RegisterInput {
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
	}
	type Query {
		getClubs: [Club]
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
	}
`;
