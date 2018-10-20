const path = require('path')
const express = require("express")
const router = express.Router()

const parser = require('./metadataParser')

function index(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
}

router.get('/', index)
router.post('/api/getMetadata', parser.parseMetadata)

module.exports = router