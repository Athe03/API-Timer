const mongoose = require('mongoose')
const {Schema} = mongoose;

const timerSchema = new Schema({
    user_id:{
        type: mongoose.ObjectId,
        ref: "Users"
    },
    time: {
        type: Number,
        required: true
    }
});

const Timer = mongoose.model("Timer", timerSchema);

module.exports = {Timer}