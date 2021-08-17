const { model, Schema } = require("mongoose");

const eventSchema = new Schema({
	name: String,
	city_state: String,
    venue: String,
    ticket_price:String,
    img: String,
      
});

module.exports = model("Event", eventSchema);