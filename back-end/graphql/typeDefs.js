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
	input EventInput {
		name: String!
		city_state: String!
		venue: String!
		ticket_price: String!
		img: String
	}

	type Query {
		getClubs: [Club]
		getEvents: [Event]
		getCharity: [Charity]
	}
	type Event {
		name: String!
		city_state: String!
		venue: String!
		ticket_price: String!
		img: String
	}

	type Member {
		name: String
		serviceYears: String
	}

	type Charity {
		name: String
		date: String
		description: String
		features: String
	}

	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
		createEvent(eventInput: EventInput): Event!
	}
`;
