import { readFile } from 'fs/promises';
import {createServer} from 'http';
import path from 'path';

const PORT = 3000;

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath)
        res.writeHead(200, {'Content-Type': contentType});
        res.end(data)
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Page Not Found!');
    }
}

const server = createServer( async (req, res)=>{
    console.log(req.url)
    if(req.method === "GET"){
        if(req.url === "/"){
            return serveFile(res, path.join('public','index.html'), 'text/html')
        }else if(req.url === "/style.css"){
            return serveFile(res, path.join('public','style.css'), 'text/css')
        }
    }
        
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})





































// import path from 'path';
// import { readFile } from 'fs/promises';
// import { createServer } from 'http';


// const server = createServer(async (req, res) => {
//     if(req.method==='GET'){
//         if(req.url ==='/'){
//             try {
//                 const data = await readFile(path.join('public', 'index.html'))
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.end(data)
//             } catch (error) {
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 res.end('404 Page not found!')
//             }
//         }else if(req.url ==='/style.css'){
//             try {
//                 const data = await readFile(path.join('public', 'style.css'))
//                 res.writeHead(200, {'Content-Type': 'text/css'});
//                 res.end(data)
//             } catch (error) {
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 res.end('404 Page not found!')
//             }
//         }
//     }
// });

// server.listen(3000, () =>{
//     console.log('Server is running on http://localhost:3000')
// })


























