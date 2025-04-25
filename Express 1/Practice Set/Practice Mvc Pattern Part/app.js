import express from 'express'
import homeRouter from './routes/homeRouter.js';
import path from 'path';
import { rootDir } from './utils/pathUtil.js';
import userRouter from './routes/userForm.js';

const app = express();


app.use(express.urlencoded()) // body parse korar jonno ai middleware
app.use(express.static(path.join(rootDir, 'public'))) // akhn public folder er sob file publicly access kora jabe 

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(homeRouter)
app.use('/user', userRouter)

app.use((req, res, next) => {
    res.send('404 page not found!')
})

app.listen(4000, ()=>{
    console.log(`Port Running in http://localhost:4000`);
})



