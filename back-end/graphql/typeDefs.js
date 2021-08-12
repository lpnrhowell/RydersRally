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
`
;
