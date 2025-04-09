const fs = require('fs')
const path = require('path')

const filename = 'asyncTest.txt'
const filePath = path.join(__dirname, filename)


// writeFile
const writeFile = fs.writeFile(filePath, 'Hello World!', (err) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('File written successfully')
    }
})


// readFile
const readFile = fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log(data)
    }
}
)

appendFile
const appendFile = fs.appendFile(filePath, '\nThis is the appended data', 'utf-8', (err) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('File appended successfully')
    }
})


unlink
fs.unlink(filePath, (err) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('File deleted successfully')
    }
})




