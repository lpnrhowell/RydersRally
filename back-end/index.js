require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/restaurants");

const uri =
	process.env.MONGODB_URI || "mongodb://localhost:27017/sample_restaurants";

const PORT = 5000;

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => {
		console.log("MongoDB Connected");
		console.log(uri);
		return server.listen({ port: PORT });
	})
	.then((res) => {
		console.log(`Server running at ${res.url}`);
	})
	.catch((err) => {
		console.error(err);
	});
