const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>I am Tanvir Ahmed</h1>') 
        res.end()
    }
})

server.listen(3000, () =>{
    console.log('Server is running on port 3000')
})



// const http = require('http');

// const server = http.createServer((req, res) =>{
//     if(req.url === '/'){
//         res.write('<h1>I am Tanvir Ahmed</h1>') 
//         res.end()
//     }
//     if(req.url === '/contact'){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('This is the contact page')
//         res.end()
//     }
// })

// // Web Server 

// const port = 3000
// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })
