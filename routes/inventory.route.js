const router = require('express').Router();

// import controllers
const inventoryController = require('../controllers/inventory.controller');

// import middleware
const multer = require('../middleware/multer_img_upload');

// index
router.post('', multer, inventoryController.createInventory);

router.patch('/:inventory_id', multer, inventoryController.updateInventory);

router.get('/all', inventoryController.getAllInventories);

router.get('/:inventory_id', inventoryController.getInventory);

router.delete('/:inventory_id', inventoryController.deleteInventory);

router.patch('/add-to-warehouse/:inventory_id/:warehouse_id', inventoryController.addInventoryToWarehouse);


module.exports = router;