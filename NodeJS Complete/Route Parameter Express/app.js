import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

app.use(express.urlencoded({extended: true}))

const absolutePath = path.join(import.meta.dirname, 'public')
app.use(express.static(absolutePath))

// app.get('/contact', (req, res) => {
//     console.log(req.query);
//     // res.send('Hi')
//     res.redirect('/')
// })

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})

app.use((req, res) => {
    // res.status(404).send('Page Not Found!')
    res.status(404).sendFile(path.join(import.meta.dirname, "public", "404.html"))
})

// Practice Route Parameter
// app.get('/profile/:username', (req, res) => {
//     console.log(req.params); // { username: 'sadia' }
//     console.log(req.params.username); // sadia
//     res.send(req.params.username)
// })

// app.get('/profile/:username/age/:myage', (req, res) => {
//     console.log(req.params); // { username: 'tanvir', myage: '24' }
//     res.send(req.params.username) // tanvir
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`)
})


