import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

app.use(express.static("public"))
// app.get('/', (req, res)=>{
//   const __fileName = path.join(import.meta.dirname, "public", "index.html")
//   res.sendFile(__fileName)
// })

// app.get("/public", (req, res) => {
//   const __fileName = path.join(import.meta.dirname, "public", "index.html")
//   res.sendFile(__fileName)
// })

// const absolutePath = path.join(import.meta.dirname, "public")
// app.use(express.static(absolutePath))

// app.get('/public', (req, res) => {
//   const __fileName = new URL(import.meta.url)
//   const publicPage = Path.join(import.meta.dirname, "public", "index.html")
//   res.sendFile(publicPage)
// })

// app.get('/', (req, res) => {
//     return res.send('<h1>Hello World!</h1>')
// })
// app.get('/about', (req, res) => {
//     return res.send('<h1>Hello About Page!</h1>')
// })

// app.get('/contact', (req, res) => {
//     return res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//           <title>Contact Us</title>
//           <style>
//             body {
//               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//               background: #f0f2f5;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               height: 100vh;
//               margin: 0;
//             }
//             .contact-container {
//               background: #fff;
//               padding: 30px 40px;
//               border-radius: 12px;
//               box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//               width: 100%;
//               max-width: 500px;
//             }
//             .contact-container h2 {
//               margin-bottom: 20px;
//               text-align: center;
//               color: #333;
//             }
//             .form-group {
//               margin-bottom: 15px;
//             }
//             .form-group label {
//               display: block;
//               margin-bottom: 6px;
//               font-weight: bold;
//               color: #555;
//             }
//             .form-group input,
//             .form-group textarea {
//               width: 100%;
//               padding: 10px;
//               border: 1px solid #ccc;
//               border-radius: 6px;
//               font-size: 14px;
//             }
//             .form-group textarea {
//               resize: vertical;
//               height: 100px;
//             }
//             .form-group button {
//               background: #4CAF50;
//               color: #fff;
//               padding: 10px 20px;
//               border: none;
//               border-radius: 6px;
//               font-size: 16px;
//               cursor: pointer;
//               transition: background 0.3s;
//             }
//             .form-group button:hover {
//               background: #45a049;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="contact-container">
//             <h2>Contact Us</h2>
//             <form>
//               <div class="form-group">
//                 <label for="name">Your Name</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" required/>
//               </div>
//               <div class="form-group">
//                 <label for="email">Your Email</label>
//                 <input type="email" id="email" name="email" placeholder="Enter your email" required/>
//               </div>
//               <div class="form-group">
//                 <label for="message">Your Message</label>
//                 <textarea id="message" name="message" placeholder="Type your message..." required></textarea>
//               </div>
//               <div class="form-group">
//                 <button type="submit">Send Message</button>
//               </div>
//             </form>
//           </div>
//         </body>
//         </html>
//       `);
// })

// app.get('/', (req,res) => {
//   const homePagePath = path.join(import.meta.dirname, "public", "index.html")
//   res.sendFile(homePagePath)
// })

// const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`)
})


