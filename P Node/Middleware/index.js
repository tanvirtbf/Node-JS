const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

const users = require('./users.json')
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

// Model 
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
app.get('/api/users', (req,res) => {
  console.log(req.headers)
  res.setHeader('myName', 'Tanvir Ahmed')
  return res.json(users)
})
app.get('/users', (req,res)=>{
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `
  res.send(html)
})

// Dynamic Route
app.get('/api/users/:id', (req,res)=>{
  const id = Number(req.params.id)
  const user = users.find((user)=> user.id === id)
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




  // users.push({...body, id: users.length + 1})
  // fs.writeFile('./users.json', JSON.stringify(users), (err,data)=>{
  //   return res.json({status:'success', id: users.length + 1})
  // })
})


// PATCH REST API 
app.post('/api/users/:id' ,(req,res)=>{
  // Create New User
  res.json({status:'pending'})
})

// DELETE REST API 
app.post('/api/users/:id' ,(req,res)=>{
  // Create New User
  res.json({status:'pending'})
})

const port = process.env.PORT || '3000'

app.listen(port, ()=>{
  console.log(`App Run With http://localhost:${port}`)
})
