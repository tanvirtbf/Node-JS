const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

const { type } = require('os')

const app = express()

// Connection 
mongoose.connect(`mongodb://127.0.0.1:27017/youtube-app-1`)
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err) => console.log('Mongo ERROR : ', err))


// Schema 
const userSchema = new mongoose.Schema({
  firstName :{
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
  jobTitle : {
    type : String,
  }, 
  gender : {
    type : String,
  }
}, {timestamps : true})

// Model or Collection
const User = mongoose.model('user', userSchema)



// Middleware (for accept body)
app.use(express.urlencoded({ extended: false})) 

// Middleware 
app.use((req,res, next)=>{
  req.myName = 'Tanvir'
  console.log('Hello From Middleware 1')
  next()
})

app.use((req,res,next)=>{
  console.log(req.myName)
  console.log('Hello From Middleware 2')
  next()
})

// Log Middleware

app.use((req,res,next)=>{
  const log = Date.now()
  fs.appendFile('./log.txt', `${Date.now()} : ${req.url}\n `, (err,data)=>{
    next()
  })
})

// REST API (GET)
app.get('/api/users', async (req,res) => {
  const allDbUsers = await User.find()
  res.setHeader('myName', 'Tanvir Ahmed')
  return res.json(allDbUsers)
})

app.get('/users', async (req,res)=>{
  const allDbUsers = await User.find()
  const html = `
    <ul>
      ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email} - ${user.jobTitle} - ${user.gender} </li>`).join("")}
    </ul>
  `
  res.send(html)
})

// Dynamic Route
app.get('/api/users/:id', async (req,res)=>{
  const user = await User.findById(req.params.id)
  if(!user) return res.status(404).json({error : "User Not Found!"})
  return res.json(user)
})

// POST REST API 
app.post('/api/users' ,async (req,res)=>{
  // Create New User
  const body = req.body

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Fields are required!" });
  }

  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender : body.gender,
    jobTitle : body.job_title
  })
  console.log(result)
  return res.status(201).json({msg : "success"})
})


// PATCH REST API 
app.patch('/api/users/:id' , async (req,res)=>{
  
  await User.findByIdAndUpdate(req.params.id, { lastName : 'Ahmed Boss' })

  res.json({status:'Success'})
})

// DELETE REST API 
app.delete('/api/users/:id' , async (req,res)=>{
  await User.findByIdAndDelete(req.params.id)
  res.json({status:'success'})
})

const port = process.env.PORT || '3000'

app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})
