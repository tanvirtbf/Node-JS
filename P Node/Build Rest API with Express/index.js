const express = require('express')
const fs = require('fs')
const users = require('./users.json')

const app = express()

// Middleware (for accept body)
app.use(express.urlencoded({ extended: false}))

// REST API (GET)
app.get('/api/users', (req,res) => {
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
app.post('/api/users' ,(req,res)=>{
  // Create New User
  const body = req.body
  users.push({...body, id: users.length + 1})
  fs.writeFile('./users.json', JSON.stringify(users), (err,data)=>{
    return res.json({status:'success', id: users.length + 1})
  })
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
