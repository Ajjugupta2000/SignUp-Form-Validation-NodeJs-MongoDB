const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    restaurantName: String,
    pincode: Number,
    location: String,
    website: String,
    phoneNumber: Number,
    email: String,
    password: String,
    avgDailyTransactions: Number
  });
  
  // Create a model based on the schema
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);

  module.exports=Restaurant;