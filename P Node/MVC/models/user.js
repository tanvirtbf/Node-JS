const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true
  }, 
  lastName : {
    type : String,
  }, 
  email : {
    type : String,
    required : true,
    unique : true,
  },
  age : {
    type : Number,
    required : true,
  }, 
  gender : {
    type : String,
    required : true,
  },
  address : {
    type : String,
    required : true
  }
}, {timestamps : true})

// Model or Collection 
const User = mongoose.model('users', userSchema)


module.exports = User
