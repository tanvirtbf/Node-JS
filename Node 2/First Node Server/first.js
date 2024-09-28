const fs = require('fs')

console.log('Tanvir Ahmed')

fs.writeFile("output.txt","writting file", (err)=>{
  if(err) console.log('Error Occurred')
  else console.log('File Written successfully')
})
