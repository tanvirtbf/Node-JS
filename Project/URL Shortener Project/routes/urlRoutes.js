const express = require('express')
const { handleGenerateNewShortUrl } = require('../controllers/urlController.js')

const router = express.Router()

router.post('/', handleGenerateNewShortUrl)

module.exports = router

