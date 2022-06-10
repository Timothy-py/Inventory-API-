const logger = require('../logger');

// get models
const {Warehouse} = require('../models/warehouse.model');


// create a warehouse
exports.createWarehouse = async (req, res) => {
    const {name, country, city} = req.body;
    try {
        const warehouse = await Warehouse.create({
            name: name,
            country: country,
            city: city
        })

        return res.status(200).json({
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