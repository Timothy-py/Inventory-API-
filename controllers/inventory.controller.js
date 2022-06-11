// import model
const {Inventory} = require('../models/inventory.model');
const logger = require('../logger');

// create inventory
exports.createInventory = async(req, res) => {
    try {
        const {
            name, description,
            price, unit,
            quantity, other_details
        } = req.body;
        const image = req.image.url

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