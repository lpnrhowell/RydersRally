const { model, Schema } = require("mongoose");

const restaurantSchema = new Schema({
	borough: String,
	cuisine: String,
	name: String,
});

module.exports = model("Restaurants", restaurantSchema);
