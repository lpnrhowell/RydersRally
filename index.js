require("dotenv").config();
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const path = require("path");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ryders_rally";

const PORT = 5000;

app.use(express.static(path.join(__dirname, "ryders-rally", "build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "ryders-rally", "build", "index.html"));
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => {
		console.log("DB is Connected");
		console.log(uri);
		return server.listen({ port: PORT });
	})
	.then((res) => {
		console.log(`Server is now running at ${res.url}`);
	})
	.catch((err) => {
		console.error(err);
	});
