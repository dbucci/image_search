var express = require('express')
  , router = express.Router()

router.use('/api/imagesearch', require('./search'))
router.use('/api/latest/imagesearch', require('./queries'))

module.exports = router