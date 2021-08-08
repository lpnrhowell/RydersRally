let mongoose = require("mongoose");
require("dotenv").config();

let uri =
	process.env.MONGODB_URI || "mongodb://localhost:27017/sample_restaurants";
  console.log(uri)
// Mongoose connection to database
mongoose.connect(
	uri,
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);
