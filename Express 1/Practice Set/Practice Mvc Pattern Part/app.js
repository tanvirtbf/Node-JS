import express from 'express'

const app = express();

app.set('views', 'ejs')
app.set('views', 'views')


app.listen(4000, ()=>{
    console.log(`Port Running in http://localhost:4000`);
})
