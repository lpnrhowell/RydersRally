require("dotenv").config();
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const path = require("path");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ryders_rally";

app.use(express.static("public"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// });
async function startApolloServer(typeDefs, resolvers) {
	const server = new ApolloServer({ typeDefs, resolvers });

	await server.start();
	server.applyMiddleware({ app, path: "/graphql" });

	app.listen(process.env.PORT, () => {
		console.log(
			`Server is listening on port ${process.env.PORT}${server.graphqlPath}`
		);
	});
}

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => {
		console.log("DB is Connected");
		console.log(uri);
		return startApolloServer(typeDefs, resolvers);
	})
	.catch((err) => {
		console.error(err);
	});
