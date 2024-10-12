const fs = require('fs')

// File Create and append text

// Sync
// fs.writeFileSync('./test.txt','Hello World!')

// Async
// fs.writeFile('./test.txt','Hello World My Boy',(err)=>{})

// Read File

// const result = fs.readFileSync('./test.txt','utf-8')
// console.log(result)

// sync call er khetre text file theke text read kore return diye dey and seta amra chaile ekta variable er moddhe store korte pari . jemon ekhane korechi result variable er moddhe..
// kintu async call er khetre evabe return kore na . async call er khetre third argument hishebe ekta callback pass kora hoy, sekhane first parameter holo error . jodi file read korte giya kono error pay tahole first argument er moddhe ashe . jodi error na pay tahole callback er second parameter er moddhe read text ta ashe..

// const result = fs.readFile('./test.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log('Error!')
//     } else{
//          console.log(result)
//     }
// })

// Append Data 

// writeFile diye korle old data ke overwrite kore fele . kintu appendFile diye old datar sathe merge kore last e data add kore 

// Sync
// fs.appendFileSync('./test.txt','\nMy Son Name is Abu Bakar')

// Async 
// fs.appendFile('./test.txt','\nHello EveryOne',(err)=>{})


// Copy a File
// fs.cpSync('./test.txt','copy.txt')


// Delete a File
// fs.unlinkSync('./copy.txt')

// File Details 
// console.log(fs.statSync('./test.txt'))