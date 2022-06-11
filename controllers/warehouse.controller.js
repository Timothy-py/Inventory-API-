const {validationResult} = require('express-validator');
const logger = require('../logger');

// import utility
const warehouseValidator = require('../utility/warehouse.validator')

// get models
const {Warehouse} = require('../models/warehouse.model');


// create a warehouse
exports.createWarehouse = [
    // validate request body
    warehouseValidator(),

    async (req, res) => {
        const errors = validationResult(req);
    
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
        }
    
        const {name, country, city} = req.body;
        try {
            const warehouse = await Warehouse.create({
                name: name,
                country: country,
                city: city
            })
    
            return res.status(201).json({
                message: 'Warehouse created successfully',
                data: warehouse
            })
        } catch (error) {
            logger.error(`Unable to create warehouse:-${error.message}`)
            return res.status(500).json({
                message: 'Unable to create warehouse',
                error: error
            })
        }
    }
]