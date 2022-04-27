const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavor: {
        type:String,
        minLength:4,
        maxLength:30
    },
    price:{
        type:Number,
        min:10,
        max:400
    },
    quantity: String
})
module.exports = mongoose.model("icecream",
icecreamSchema)