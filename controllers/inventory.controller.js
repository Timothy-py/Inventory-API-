const AWS = require('aws-sdk');
const {uuid} = require('uuidv4');
const {validationResult} = require('express-validator');
const util = require('util');

// import model
const {Inventory} = require('../models/inventory.model');
const logger = require('../logger');

// import utility
const inventoryValidator = require('../utility/inventory.validator');

// configure amazon s3 bucket
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

// ********************CREATE INVENTORY******************************
exports.createInventory = [
    // validate request body
    inventoryValidator(),

    async(req, res) => {
        const errors = validationResult(req);
    
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
        }

        // if request body contains an image: process the image
        if(req.file){
            const img = req.file.originalname.split(".")
            const fileType = img[img.length - 1]
            
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `${uuid()}.${fileType}`,
                Body: req.file.buffer
            }

            var image;
            try {
                // upload image to aws s3 bucket
                const data = await s3.upload(params).promise();

                image = data['Location']
              }
              catch (err) {
                logger.error(`Unable to process image - ${err}`)
                return res.status(500).json({
                    message: "Unable to process image",
                    error: err
                })
              }
        }

        try {
            const {
                name, description,
                price, unit,
                quantity, other_details
            } = req.body;
    
            // instantiate a new inventory object
            const inventory = new Inventory({
                name, description,
                price, unit,
                quantity, other_details,
                image
            });
    
            // save inventory
            const saveInventory = await inventory.save()
    
            return res.status(201).json({
                message: 'Inventory created successfully',
                data: saveInventory
            })
    
        } catch (error) {
            logger.error(`Unable to create inventory:-${error.message}`)
            return res.status(500).json({
                message: "Unable to create Inventory",
                error: error
            })
        }
    }
]


// ********************GET INVENTORY******************************
exports.getInventory = async (req, res) => {

    try {
        const inventory_id = req.params.inventory_id

        const query = await Inventory.findById(inventory_id).exec()

        if(query){
            return res.status(200).json({
                message: 'Inventory retrieved successfully',
                data: query
            })
        }else{
            return res.status(404).json({
                message: 'Item does not exist',
                data: query
            })
        }
    } catch (error) {
        logger.error(`Unable to retrieve inventory item:-${error.message}`)
        return res.status(500).json({
            message: 'Unable to retrieve inventory item',
            error: error
        })
    }
}


// ********************GET ALL INVENTORIES******************************
exports.getAllInventories = async (req, res) => {
    try {
        const query = await Inventory.find().exec()
        return res.status(200).json({
            message: 'All Inventories retrieved successfully',
            data: query
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Unable to retrieve Inventories',
            error: error
        })
    }
}

// // ********************UPDATE INVENTORY******************************
exports.updateInventory = async (req, res) => {

    // if request body contains an image: process the image
    if(req.file){
        const img = req.file.originalname.split(".")
        const fileType = img[img.length - 1]
        
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${uuid()}.${fileType}`,
            Body: req.file.buffer
        }

        // var image;
        try {
            // upload image to aws s3 bucket
            const data = await s3.upload(params).promise();

            // image = data['Location']
            req.body.image = data['Location']
          }
          catch (err) {
            logger.error(`Unable to process image - ${err}`)
            return res.status(500).json({
                message: "Unable to process image",
                error: err
            })
          }
    }

    try {
        const inventory_id = req.params.inventory_id;
        const body = {...req.body}

        const query = await Inventory.findByIdAndUpdate(inventory_id, body).exec()

        if(query){
            return res.status(204).send('Updated sucessfully')
        }else{
            return res.status(404).json({
                message: 'Item does not exist',
                data: query
            })
        }
    } catch (error) {
        logger.error(`Unable to update inventory item:-${error.message}`)
        return res.status(500).json({
            message: 'Unable to update inventory item',
            error: error
        })
    }   
}