const express = require('express')
const urlRoute = require('./routes/urlRoutes.js')
const { connectDb } = require('./connection.js')
const URL = require('./models/url.js')


const app = express()

connectDb('mongodb://127.0.0.1:27017/urlShortner')
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err)=> console.log(err))

// Middleware (for accept form data as json)
app.use(express.json())

// Routes
app.use('/url', urlRoute)
app.use('/', urlRoute)


const port = process.env.PORT || '3000'
app.listen(port, ()=> console.log(`Server Run with http://localhost:${port}`))
