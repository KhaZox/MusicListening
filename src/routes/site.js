
var express = require('express')
var router = express.Router()

const siteController= require('../app/controllers/SiteController')

router.use('/',siteController.index)

module.exports = router;
