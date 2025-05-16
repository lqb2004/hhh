let express = require('express')
let router = express.Router()
let records = require('./API/records')

router.get('/records', records.get)

module.exports = router