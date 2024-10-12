const express = require('express')
const User = require('../models/user')

const router = express.Router()


// Get User (Rest Api)
router.get('/api/users', async (req,res)=>{
  const allUsers = await User.find()
  res.json(allUsers)
})

router.get('/users', async (req,res)=>{
  const allUsers = await User.find()
  const html = `
    <ul>
      ${allUsers.map((user)=> `<li>${user.firstName}</li>`)}
    </ul>
  `
  res.send(html)
})


// Create User 
router.post('/api/users', async (req,res)=>{
  const body = req.body

  if(!body || !body.firstName || !body.lastName || !body.email || !body.age || !body.gender || !body.address) {
    res.status(400).json({ message : 'All Data have not received!'})
  }

  await User.create(body)

  res.status(201).json({ message : 'Success'})
})


// Update User Data
router.patch('/api/users/:id', async(req,res)=>{
  await User.findByIdAndUpdate(req.params.id, {lastName : 'Boss'})
  res.json({ message : 'Successfully Update'})
})

// Delete User
router.delete('/api/users/:id', async(req,res)=>{
  await User.findByIdAndDelete(req.params.id)
  res.json({ message : 'Successfully Deleted!'})
})


module.exports = router
