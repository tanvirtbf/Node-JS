const express = require('express')
const urlRoute = require('./routes/urlRoutes.js')
const { connectDb } = require('./connection.js')

const app = express()

connectDb('mongodb://127.0.0.1:27017/urlShortner')
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err)=> console.log(err))

app.use(express.json())

app.use('/url', urlRoute)


const port = process.env.PORT || '3000'
app.listen(port, ()=> console.log(`Server Run with http://localhost:${port}`))
