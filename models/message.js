const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: { type: String },
    email: { type: String },
    message: String,
    date: { type: Date, default: Date.now }
})

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;