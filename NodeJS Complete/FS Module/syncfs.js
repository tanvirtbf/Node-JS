const fs = require('fs')
const path = require('path')

const filename = 'test.txt'
const filePath = path.join(__dirname, filename)

// writeFileSync
// fs.writeFileSync(filePath, "This is the initial Updated Data", "utf-8")


// readFileSync
// const readFile = fs.readFileSync(filePath, 'utf-8')
// console.log(readFile.toString())
// console.log(readFile)


// appendFileSync
// const appendFile = fs.appendFileSync(
//     filePath,
//     "\nThis is the appended data",
//     "utf-8"
// )


// unlinkSync
// const fileDelete = fs.unlinkSync(filePath)
// console.log(fileDelete)


// renameSync
// const newUpdatedFileName = "testsss.txt"
// const newFilePath = path.join(__dirname, newUpdatedFileName)
// const renameFile = fs.renameSync(filePath, newFilePath)
// console.log(renameFile)

