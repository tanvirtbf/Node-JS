const fs = require('fs')
const path = require('path')

const filename = 'asyncTest.txt'
const filePath = path.join(__dirname, filename)

// readdir
const file = __dirname
fs.promises
    .readdir(file)
    .then((data) =>{
        console.log('Directory contents:', data)
    })
    .catch((err) =>{
        console.log(err)
    })