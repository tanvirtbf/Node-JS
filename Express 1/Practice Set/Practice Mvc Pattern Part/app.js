import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hii')
})

app.listen(4000, ()=>{
    console.log(`Port Running in http://localhost:4000`);
})
