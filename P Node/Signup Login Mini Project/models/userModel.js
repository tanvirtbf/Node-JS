const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
}, {timestamps: true})

const User = mongoose.model('allUser', userSchema)

module.exports = {
    User,
}
