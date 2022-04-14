const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavor: String,
    price: Number,
    quantity: String
})
module.exports = mongoose.model("icecream",
icecreamSchema)