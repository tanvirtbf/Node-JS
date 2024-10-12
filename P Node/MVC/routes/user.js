const express = require('express')
const User = require('../models/user')
const { getUser, getUserHtml, createUser, updateUser, deleteUser } = require('../controllers/user')

const router = express.Router()


// Get User (Rest Api)
router.get('/api/users', getUser)

router.get('/users', getUserHtml)

// Create User 
router.post('/api/users', createUser)

// Update User Data
router.patch('/api/users/:id', updateUser)



// Delete User
router.delete('/api/users/:id', deleteUser)


module.exports = router
