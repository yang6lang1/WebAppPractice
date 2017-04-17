var express = require('express');
var router = express.Router();

var hotelsController = require('../controllers/hotels.controllers.js');
router.route('/hotels').get(hotelsController.hotelsGetALl);

router.route('/hotels/:hotelId').get(hotelsController.hotelsGetOne);

router.route('/hotels/new').post(hotelsController.hotelsAddOne);

module.exports = router;