const fs = require('fs')
const path = require('path')

const filename = 'test.txt'
const filePath = path.join(__dirname, filename)

// writeFileSync
// fs.writeFileSync(filePath, "This is the initial Updated Data", "utf-8")


// readFileSync
const readFile = fs.readFileSync(filePath, 'utf-8')
console.log(readFile.toString())
console.log(readFile)


