import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const absolutePath = path.join(import.meta.dirname, 'public')
app.use(express.static(absolutePath))

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


