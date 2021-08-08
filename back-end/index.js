require("dotenv").config();
const Realm = require("realm")
const express = require("express");
const app = express();
const expressGraphQL = require('express-graphql').graphqlHTTP;
let mongoose = require("mongoose");
const schema = require("./schema");


//set view engine
const uri =
	process.env.MONGODB_URI || "mongodb://localhost:27017/sample_restaurants";

// app.get(
// 	"/restaurants",
// 	ExpressGraphQL({
// 		schema,
// 		graphiql: true,
// 	})
// );
app.use(
	"/graphql",
	expressGraphQL({
		schema,
		graphiql: true,
	})
);
const mongoApp = new Realm.App({ id: "rydersrally-vdnpe" });
const credentials = Realm.Credentials.anonymous();




mongoose
	.connect(uri, {
		// auth: {
		// 	user: "",
		// 	password: "",
		// },
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("connected to the db"))
	.catch((err) => console.log(err));

const server = app.listen(5000, function () {
	console.log("Node server is running..");
	console.log(uri);
});
