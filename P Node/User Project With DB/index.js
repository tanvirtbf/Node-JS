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
}, {timestamps : true})

// Model or Collection 
const User = mongoose.model('users', userSchema)

// Middleware for receive form data
app.use(express.urlencoded({extended : false}))

// Get User (Rest Api)
app.get('/api/users', async (req,res)=>{
  const allUsers = await User.find()
  res.json(allUsers)
})

app.get('/users', async (req,res)=>{
  const allUsers = await User.find()
  const html = `
    <ul>
      ${allUsers.map((user)=> `<li>${user.firstName}</li>`)}
    </ul>
  `
  res.send(html)
})


// Create User 
app.post('/api/users', async (req,res)=>{
  const body = req.body

  if(!body || !body.firstName || !body.lastName || !body.email || !body.age || !body.gender || !body.address) {
    res.status(400).json({ message : 'All Data have not received!'})
  }

  await User.create(body)

  res.status(201).json({ message : 'Success'})
})


// Update User Data
app.patch('/api/users/:id', async(req,res)=>{
  await User.findByIdAndUpdate(req.params.id, {lastName : 'Boss'})
  res.json({ message : 'Successfully Update'})
})

// Delete User
app.delete('/api/users/:id', async(req,res)=>{
  await User.findByIdAndDelete(req.params.id)
  res.json({ message : 'Successfully Deleted!'})
})

const port = process.env.PORT || '3000'

app.listen(port , ()=>{
  console.log(`App Run With http://localhost:${port}`)
})


