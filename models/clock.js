const mongoose = require("mongoose")
const clockSchema = mongoose.Schema({
name: String,
price: Number,
color: String
})
module.exports = mongoose.model("clock",clockSchema)