const express = require('express')

const userRoute = require('./routes/user.js')
const {connectMongoDb} = require('./connection.js')
const { logReqRes } = require('./middleware/index.js')

const app = express()

connectMongoDb('mongodb://127.0.0.1:27017/userTest')

// Middleware for receive form data
app.use(express.urlencoded({extended : false}))

app.use(logReqRes('./log.txt'))

// Routes
app.use('', userRoute)

const port = process.env.PORT || '3000'

app.listen(port , ()=>{
  console.log(`App Run With http://localhost:${port}`)
})


