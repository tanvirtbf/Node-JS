import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const absolutePath = path.join(import.meta.dirname, 'public')
app.use(express.static(absolutePath))

app.get('/profile/:username', (req, res) => {
    console.log(req.params); // { username: 'sadia' }
    console.log(req.params.username); // sadia
    res.send('Hi!')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`)
})


