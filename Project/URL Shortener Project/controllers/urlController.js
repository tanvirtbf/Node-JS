const shortid = require('shortid')
const URL = require('../models/url.js')

async function handleGenerateNewShortUrl(req,res){
    const body = req.body
    const shortId = shortid()

    if(!body.url) return res.status(400).json({ err : 'url needed!'})

    await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : [],
    })

    return res.json({ message : shortId })
}

module.exports = {
    handleGenerateNewShortUrl,
}

