exports.search = function(query, offset, cb) {
  var key = process.env.GKEY
    , cx = process.env.GCX
    , GoogleSearch = require('google-search')
    , googleSearch = new GoogleSearch({
    key: key,
    cx: cx
  })

  googleSearch.build({
    q: query || "",
    start: offset || 1,
    searchType: 'image'
  }, function(err, response) {
    if (err) return cb(err)
    cb(null, response)
  })
}