var MongoClient = require('mongodb').MongoClient; //A class to work with connections
//Connection string to local databse
// protocol://server:port/databaseName
var dburl = 'mongodb://localhost:27017/meanhotel';

var connection = null;

var open = function() {
    MongoClient.connect(dburl, function(err, db) {
        //callback function that runs when connect passes/fails
        if (err) {
            console.error("Fail to connection to mongo db: " + err);
            return;
        }
        console.log("DB connection open", db);
        connection = db;
    });
};

var get = function() {
    return connection;
};

module.exports = {
    open: open,
    get: get
}