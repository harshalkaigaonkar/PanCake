const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = mongoose.Schema({
    roomname: {
        type: Schema.Types.ObjectId,
        ref: "Room"
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Message', Message);