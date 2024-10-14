const express = require('express')
const { getHomePage, handleUrlRoutes, handleRedirectUrl } = require('../controllers/urlController')

const router = express.Router()

router.get('/', getHomePage)

router.get('/url/:shortId', handleRedirectUrl)

router.post('/url', handleUrlRoutes)

module.exports = router
