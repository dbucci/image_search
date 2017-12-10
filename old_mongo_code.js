/*
 * Copyright (c) 2016 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Written with: mongodb@2.1.3
 * Documentation: http://mongodb.github.io/node-mongodb-native/
 * A Node script connecting to a MongoDB database given a MongoDB Connection URI.
*/

// server.js
// where your node app starts

// init project
var express = require('express')
var mongodb = require('mongodb')
var db = require('../db')
var app = express()
                                                         
exports.create = function(term, cb) {
    let record = {
      term: term,
      when: new Date().toString()
    }
    db.save(record, cb)
  }

   // Note that the insert method can take either an array or a dict.

  history.insert(seedData, function(err, result) {

    if(err) throw err;

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */

    songs.update(
      { song: 'One Sweet Day' }, 
      { $set: { artist: 'Mariah Carey ft. Boyz II Men' } },
      function (err, result) {

        if(err) throw err;

        /*
         * Finally we run a query which returns all the hits that spend 10 or
         * more weeks at number 1.
         */

        songs.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1 }).toArray(function (err, docs) {

          if(err) throw err;

          docs.forEach(function (doc) {
            console.log(
              'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] + 
              ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
            );
            dbSongs+="Adding "+doc['artist']+" - "+doc['song']+" into 'songs'<br />";
          });

          // Since this is an example, we'll clean up after ourselves.
          songs.drop(function (err) {
            dbSongs+="Dropping collection 'songs'<br />";
            if(err) throw err;

            // Only close the connection when your app is terminating.
            db.close(function (err) {
              dbSongs+="Closing db " + process.env.DB_DB;
              dbSongs+="<script src=\"https://button.glitch.me/button.js\" data-style=\"glitch\"></script><div class=\"glitchButton\" style=\"position:fixed;top:20px;right:20px;\"></div>";
              if(err) throw err;
              console.log(dbSongs)
            });
          });
        });
      }
    );
  });
});
