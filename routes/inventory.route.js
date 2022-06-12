const router = require('express').Router();

// import controllers
const inventoryController = require('../controllers/inventory.controller');

// import middleware
const multer_upload = require('../middleware/multer_img_upload');

// index
router.post('', multer_upload, inventoryController.createInventory);
router.patch('/:inventory_id', inventoryController.updateInventory);
router.get('/:inventory_id', inventoryController.getInventory);
router.get('/all', inventoryController.getAllInventories);


module.exports = router;