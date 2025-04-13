import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hii')
})


app.listen(3000, () => {
    console.log(`Running port on http://localhost:3000`);
})
