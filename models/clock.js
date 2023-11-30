// const mongoose = require("mongoose")
// const clockSchema = mongoose.Schema({
// name: String,
// price: Number,
// color: String
// })
// module.exports = mongoose.model("clock",clockSchema)

const mongoose = require("mongoose");
const clockSchema = mongoose.Schema({
    name: {
        type: String,
        required: true // "required" instead of "require"
    },
    color: {
        type: String,
        required: true // "required" instead of "require"
    },
    price: {
        type: Number,
        min: 10,
        max: 4800,
        required: true // "required" instead of "require"
    }
});
module.exports = mongoose.model("clock", clockSchema); 