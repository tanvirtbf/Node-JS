const express = require('express')
const { connectionDB } = require('./connection.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express()

connectionDB('mongodb://127.0.0.1:27017/users')

// Middleware
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/users', userRoutes)

const port = process.env.PORT || '3000'
app.listen(port, ()=>{
    console.log(`App Run With http://localhost:${port}`)
})