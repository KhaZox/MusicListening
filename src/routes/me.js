var express = require('express')
var router = express.Router()

const meController= require('../app/controllers/MeController')

router.use('/videos',meController.storedVideos)
router.use('/trash/videos',meController.trashVideos)

module.exports = router;
