const { AuthenticationError, UserInputError } = require("apollo-server");
const bcrypt = require("bcryptjs");


const Event = require("../../models/Event");


module.exports = {
	Query: {
		async getEvents() {
			try {
				const events = await Event.find();
				return events;
			} catch (err) {
				throw new Error(err);
			}
		}},
        Mutation: {
            async createEvent( _,
			{ eventInput: { name,city_state, venue,ticket_price,img } }
		){
    
            const newEvent = new Event({
                name,
                city_state,
                venue,
                ticket_price,
                img
				
			})

			const res = await newEvent.save();

			return {
				name: res.name,
				city_state: res.city_state,
				venue: res.venue,
                ticket_price: res.ticket_price,
                img: res.img,
      
            };
        }
				
    }

};
