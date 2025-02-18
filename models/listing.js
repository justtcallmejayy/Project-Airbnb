const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    image: String,
    country: String
});
