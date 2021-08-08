const { AuthenticationError, UserInputError } = require('apollo-server');

const Restaurant = require("../../models/Restaurants");

module.exports = {
  Query: {
    async getRestaurants() {
      try {
        const restaurants = await Restaurant.find();
        return restaurants;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}