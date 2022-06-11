const router = require('express').Router();

// import controllers
const inventoryController = require('../controllers/inventory.controller');

// import middleware
const multer_upload = require('../middleware/multer_img_upload');
const s3_upload = require('../middleware/s3_img_upload');

// index
router.post('', multer_upload, s3_upload, inventoryController.createInventory);

module.exports = router;