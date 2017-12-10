var db = require('../db')

exports.log_query = function(query, cb) {
  var collection = db.get().collection('image_search')
  var record = {
    term: query,
    when: new Date().toISOString()
  }
  collection.insert(record, cb)
}

exports.get_queries = function(cb) {
  var collection = db.get().collection('image_search')
  collection.find().sort({'_id': -1}).project({'_id': 0}).limit( 10 ).toArray(function(err, docs) {
    if (err) return cb(err)
    cb(null, docs)
  })
}