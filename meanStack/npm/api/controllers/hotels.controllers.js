var hotelData = require('../data/hotel-data.json');
var dbconn = require('../data/dbconnection.js');
// driver to help query mongo db id
var ObjectId = require('mongodb').ObjectId;

module.exports.hotelsGetALl = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('hotels'); // => use hotels
    // docs here is a circular structure
    // var docs = collection.find(); // => db.hotels.find() blocking!!!
    // non-blocking approach: using callback
    // collection.find().toArray(function(err, data) {
    //     res.status(200).json(data);  
    // });

    var offset = 0;
    var count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    // offset => skip(), count => limit()
    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err, data) {
        res.status(200).json(data);  
    });
};

module.exports.hotelsGetOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('hotels');

    var hotelId = req.params.hotelId;
    console.log('GET the hotel: ' + hotelId);
    collection.findOne({ _id: ObjectId(hotelId) }, function(err, data) {
        res.status(200).json(data);
    });
};

module.exports.hotelsAddOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('hotels');

    console.log('POST new hotel');
    if (req.body && req.body.name && req.body.stars) {
        var newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars, 10);
        collection.insertOne(newHotel, function(err, response) {
            console.log(response.ops);
            res.status(201).json(response.ops); // 201 indicates a new resource has been createdz
        });
    } else {
        res.status(400).json({ message: "Required data missing from body" });
    }
};