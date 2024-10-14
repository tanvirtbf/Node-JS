const express = require('express')
const urlRoute = require('./routes/urlRoutes.js')
const { connectDb } = require('./connection.js')
const URL = require('./models/url.js')


const app = express()

connectDb('mongodb://127.0.0.1:27017/urlShortner')
  .then(()=> console.log('MongoDB Connected!'))
  .catch((err)=> console.log(err))

// Middleware (for accept form data as json)
app.use(express.json())

// Routes
app.get('/test', async (req,res)=>{
  const allUrls = await URL.find({})
  return res.end(`
    <html>
      <head></head>
      <body>
        <ol>
          ${allUrls.map(url => `<li>${url.shortId} - ${url.redirectUrl} - ${url.visitHistory.length}</li>`).join("")}
        </ol>
      </body>
    </html>  
  `)
})
app.use('/url', urlRoute)




const port = process.env.PORT || '3000'
app.listen(port, ()=> console.log(`Server Run with http://localhost:${port}`))
