const http = require('http')
const fs = require('fs')
const url = require('url')
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/contact',(req,res)=>{
    res.send(`Hello ${req.query.name}`)
})

app.listen(3000, ()=> console.log(`App Run With http://localhost:${3000}`))
