require("dotenv").config();
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const path = require("path");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ryders_rally";

app.use(express.static("public"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
});


server.applyMiddleware({
	path: "/ryders-rally", // you should change this to whatever you want
	app,
});

app.listen({ port: process.env.PORT || 4000 }, () => {
	console.log(`🚀  Server ready at http://localhost:4000`);
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
