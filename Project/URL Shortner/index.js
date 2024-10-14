const express = require('express')
const connectDb = require('./connection')
const path = require('path')
const homeRoute = require('./routes/urlRoutes.js')

const app = express()

connectDb('mongodb://127.0.0.1:27017/url_shortner')
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err)=> console.log(err))

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use('/', homeRoute)




const port = process.env.PORT || '3000'
app.listen(port, ()=>{
  console.log(`Server Run With http://localhost:${port}`)
})