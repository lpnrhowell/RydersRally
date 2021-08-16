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

	type Member {
		name: String
		serviceYears: String
	}
	type Query {
		getMembers: [Member]
	}
	type Charity {
		name: String
		date: String
		description: String
		features: String
	}
	type Query {
		getCharities: [Charity]
	}

	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
	}
`;

