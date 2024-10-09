const mongoose = require('mongoose')
const {Schema} = mongoose;

const usersSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: Boolean,
        required: true,
        default: true
    }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = {Users}