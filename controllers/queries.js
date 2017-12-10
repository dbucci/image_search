var express = require('express')
  , router = express.Router()
  , Queries = require('../models/queries')

router.get('/', function(req, res) {
  Queries.get_queries(function(err, queries) {
    res.send(queries)
  })
})

module.exports = router