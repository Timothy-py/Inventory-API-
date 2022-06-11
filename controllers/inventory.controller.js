// import model
const {Inventory} = require('../models/inventory.model');
const logger = require('../logger');

// import utility
const inventoryValidator = require('../utility/inventory.validator');

// ********************CREATE INVENTORY******************************
exports.createInventory = [
    // validate request Body
    inventoryValidator(),

    async(req, res) => {
        try {
            const {
                name, description,
                price, unit,
                quantity, other_details,
                image
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
    const inventory_id = req.params.inventory_id

    const query = await Inventory.findById(inventory_id).exec()

    if(query){
        return res.status(200).json({
            message: 'Inventory retrieved successfully',
            data: query
        })
    }else{
        logger.error(`Unable to retrieve inventory item:-${error.message}`)
        return res.status(500).json({
            message: 'Unable to retrieve inventory item',
            error: error
        })
    }
}