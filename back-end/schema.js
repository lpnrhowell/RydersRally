const graphql = require("graphql");
const axios = require("axios");
const {
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
} = graphql;

const Restaurant = new GraphQLObjectType({
	name: "RestaurantType",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		cuisine: { type: GraphQLString },
		borough: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		restaurants: {
			type: GraphQLList(Restaurant),
			resolve(parentValue, args) {
				return axios
					.post(
						"https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/rydersrally-vdnpe/graphql"
					)
					.then((res) => res.data);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
