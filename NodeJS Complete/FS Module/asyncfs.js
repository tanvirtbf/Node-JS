const fs = require('fs')
const path = require('path')

const filename = 'asyncTest.txt'
const filePath = path.join(__dirname, filename)


const writeFile = fs.writeFile(filePath, 'Hello World!', (err) => {
    if (err) {
        console.error(err)
        return
    }else{
        console.log('File written successfully')
    }
})

