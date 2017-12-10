var express = require('express')
  , router = express.Router()
  , Queries = require('../models/queries')
  , Gsearch = require('../models/gsearch')

router.get('/:query', function(req, res) {
  var query = req.params.query
  var offset = req.query.offset
  Queries.log_query(query, function(err, inserted) {
    //do api call and return data
    Gsearch.search(query, offset, function(err, response) {
      var result = response.items.map(function(item) {
        return {
          "url": item.link,
          "snippet": item.snippet,
          "thumbnail": item.image.thumbnailLink,
          "context": item.image.contextLink
        }
      })
      res.send(result)
    })
  })
})

module.exports = router