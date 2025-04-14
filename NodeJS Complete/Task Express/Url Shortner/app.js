import express, { urlencoded } from 'express'
import path from 'path'

const app = express()

const absolutePath = path.join(import.meta.dirname, "public")
app.use(express.static(absolutePath))

app.use(urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hii')
})

app.post('/shorten', (req, res) => {
    const h = req.body
    console.log(h);
    res.status(200).send('Hi')
})

app.listen(3000, () => {
    console.log(`Running port on http://localhost:3000`);
})
