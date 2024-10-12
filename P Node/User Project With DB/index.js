const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/userTest')
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err)=> console.log('Error : ' , err))

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
})

// Model or Collection 
const User = mongoose.model('users', userSchema)




const port = process.env.PORT || '3000'

app.listen(port , ()=>{
  console.log(`App Run With http://localhost:${port}`)
})


