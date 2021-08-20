require("dotenv").config();
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageDisabled } = require("apollo-server-core");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const path = require("path");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ryders_rally";

app.use(express.static(path.join(__dirname, "ryders-rally", "build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "ryders-rally", "build", "index.html"));
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
});

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => {
		console.log("DB is Connected");
		console.log(uri);
		return server.listen(process.env.PORT || 5000);
	})
	.then((res) => {
		console.log(`Server is now running at ${res.url}`);
	})
	.catch((err) => {
		console.error(err);
	});
