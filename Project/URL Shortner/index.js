const express = require('express')
const connectDb = require('./connection')

const app = express()

connectDb('mongodb://127.0.0.1:27017/url_shortner')
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err)=> console.log(err))

const port = process.env.PORT || '3000'
app.listen(port, ()=>{
  console.log(`Server Run With http://localhost:${port}`)
})