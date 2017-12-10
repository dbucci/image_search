var MongoClient = require('mongodb').MongoClient

var state = {
  db: null
}

exports.connect = function(uri, done) {
  if (state.db) return done()
  
  MongoClient.connect(uri, function(err, db) {
    if(err) return done(err)
    state.db = db
    done()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}