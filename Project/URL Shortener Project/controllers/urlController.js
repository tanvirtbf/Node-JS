const nanoid = require('nanoid')
const URL = require('../models/url')
async function handleGenerateNewShortUrl(req,res){
    const body = req.body
    const shortId = nanoid(8)
    if(!body.url) return res.status(400).json({ err : 'url needed!'})
    await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : [],
    })
}

module.exports = {
    handleGenerateNewShortUrl,
}