const router = require('express').Router();

// import controllers
const warehouseController = require('../controllers/warehouse.controller');

// create warehouse
router.post('', warehouseController.createWarehouse);

module.exports = router;